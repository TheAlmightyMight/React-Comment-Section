import React, { useState } from "react";
import styled from "styled-components";
import {
  updateCommentInfo,
  addReply,
  deleteReply,
  increment,
  decrementReply,
  incrementReply,
} from "../slices/commentSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  VotesContainer,
  Votes,
  VotesNumber,
  VoteBtn,
  InfoContainer,
  ReplyUpdateBtn,
  ImageReply,
  ContentContainer,
  Picture,
  UserName,
  DateInfo,
  ReplyBtn,
  ReplyText,
  DeleteBtn,
  EditBtn,
  UserIdentifier,
  UpdateBtn,
} from "../StyledComponents/styledComment";

const ContentContainerReply = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 1em;
  background-color: hsl(0, 0%, 100%);
  margin: 0 0 20px auto;
  height: 150px;
  width: 700px;
  display: flex;
`;

const ReplyContainer = styled.div`
  background-color: hsl(0, 0%, 100%);
  width: 700px;
  min-height: 150px;
  margin: 0 0 0 auto;
  border-radius: 10px;
  min-height: 150px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 50px minmax(100px, auto);
`;

const ContentReply = styled.textarea`
  font-weight: 400;
  width: 610px;
  font-size: 1em;
  font-family: inherit;
  resize: none;
  height: 100%;
  background-color: hsl(0, 0%, 100%);
  color: hsl(211, 10%, 45%);
  margin-right: 30px;
`;

const ContentReplyToReply = styled.textarea`
  font-weight: 400;
  width: 410px;
  border: 2px solid hsl(238, 40%, 52%);
  border-radius: 10px;
  text-indent: 15px;
  margin: 0 0 0 auto;
  font-size: 1em;
  resize: none;
  height: 100%;
  background-color: hsl(0, 0%, 100%);
  color: hsl(211, 10%, 45%);
  margin-right: 30px;
`;

function Reply({ el, parentId }) {
  const { username } = el.user;
  const { currentUser } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState(
    `${"@" + el.replyingTo} ${el.content} `
  );
  const [contentPost, setContentPost] = useState(`${"@" + el.replyingTo}`);
  console.log(parentId);
  const changeVisbility = () => {
    setVisible(!visible);
  };
  const editComment = () => {
    setEditable((prev) => (prev = true));
  };
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };
  const onChangeHandlerPost = (e) => {
    setContentPost(e.target.value);
  };
  const updateComment = () => {
    setEditable((prev) => (prev = false));
    dispatch(updateCommentInfo({ content: content, id: el.id }));
  };
  const replyHandler = () => {
    dispatch(addReply({ id: parentId, content: contentPost, name: username }));
    setVisible((prev) => (prev = false));
  };
  return (
    <>
      <ReplyContainer>
        <VotesContainer>
          <Votes>
            <VoteBtn
              onClick={() =>
                dispatch(
                  incrementReply({ parent: parentId, child: el.id, amount: 1 })
                )
              }
            >
              <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                  fill="#C5C6EF"
                />
              </svg>
            </VoteBtn>
            <VotesNumber>{el.score}</VotesNumber>
            <VoteBtn
              onClick={() =>
                dispatch(
                  decrementReply({ parent: parentId, child: el.id, amount: 1 })
                )
              }
            >
              <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                  fill="#C5C6EF"
                />
              </svg>
            </VoteBtn>
          </Votes>
        </VotesContainer>
        <InfoContainer>
          <Picture
            src={
              username === currentUser.username
                ? currentUser.image.png
                : el.user.image.png
            }
          ></Picture>
          <UserName>{username}</UserName>
          {username === currentUser.username ? (
            <UserIdentifier>you</UserIdentifier>
          ) : null}

          {username === currentUser.username ? (
            <EditBtn onClick={() => editComment()}>Edit</EditBtn>
          ) : (
            <ReplyBtn>
              <ReplyText>Reply</ReplyText>
            </ReplyBtn>
          )}

          {username === currentUser.username ? (
            <DeleteBtn
              onClick={() =>
                dispatch(deleteReply({ child: el.id, parent: parentId }))
              }
            >
              Delete
            </DeleteBtn>
          ) : (
            <ReplyBtn onClick={() => changeVisbility()}>
              <ReplyText>Reply</ReplyText>
            </ReplyBtn>
          )}

          <DateInfo>{el.createdAt}</DateInfo>
        </InfoContainer>
        <ContentContainer>
          <ContentReply
            onChange={(e) => onChangeHandler(e)}
            disabled={editable ? false : true}
          >
            {content}
          </ContentReply>
        </ContentContainer>
        {editable ? (
          <UpdateBtn onClick={() => updateComment()}>UPDATE</UpdateBtn>
        ) : null}
      </ReplyContainer>
      {visible ? (
        <ContentContainerReply>
          <ContentReplyToReply
            onChange={(e) => onChangeHandlerPost(e)}
          ></ContentReplyToReply>
          <ImageReply src={currentUser.image.png}></ImageReply>
          <ReplyUpdateBtn onClick={() => replyHandler()}>REPLY</ReplyUpdateBtn>
        </ContentContainerReply>
      ) : null}
    </>
  );
}

export default Reply;
