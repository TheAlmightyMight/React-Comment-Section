import React, { useState, useRef, useEffect } from "react";
import {
  addReply,
  deleteComment,
  updateCommentInfo,
  sortComments,
  increment,
  decrement,
} from "../slices/commentSlice";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import RepliesContainer from "../components/repliesContainer";
import {
  Container,
  VotesContainer,
  Votes,
  VotesNumber,
  VoteBtn,
  InfoContainer,
  ContentContainer,
  ContentContainerReply,
  ReplyUpdateBtn,
  ImageReply,
  Picture,
  UserName,
  DateInfo,
  Content,
  ReplyBtn,
  ReplyText,
  DeleteBtn,
  UpdateBtn,
  EditBtn,
  UserIdentifier,
} from "../StyledComponents/styledComment";

const ContentReply = styled.textarea`
  font-weight: 400;
  width: 510px;
  font-size: 1em;
  font-family: inherit;
  text-indent: 1em;
  resize: none;
  height: 100%;
  background-color: hsl(0, 0%, 100%);
  color: hsl(211, 10%, 45%);
  margin: 0 0 0 60px;
  border: 2px solid hsl(238, 40%, 52%);
  border-radius: 10px;
`;

function Comment({ el }) {
  const TextArea = useRef();
  const { username } = el.user;
  const { currentUser } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(el.content);
  const [visible, setVisible] = useState(false);
  const changeVisbility = () => {
    setVisible(!visible);
  };
  const editComment = () => {
    setEditable((prev) => (prev = true));
  };
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };
  const updateComment = (e) => {
    setEditable((prev) => (prev = false));
    dispatch(updateCommentInfo({ content: content, id: el.id }));
  };
  const replyHandler = () => {
    dispatch(addReply({ id: el.id, content: content, name: username }));
    setVisible((prev) => (prev = false));
  };
  useEffect(() => {
    dispatch(sortComments());
  }, [el.score]);
  return (
    <>
      <Container>
        <VotesContainer>
          <Votes>
            <VoteBtn
              onClick={() => dispatch(increment({ id: el.id, amount: 1 }))}
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
              onClick={() => dispatch(decrement({ id: el.id, amount: 1 }))}
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
            <DeleteBtn onClick={() => dispatch(deleteComment(el.id))}>
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
          <Content
            onChange={(e) => onChangeHandler(e)}
            disabled={editable ? false : true}
          >
            {content}
          </Content>
        </ContentContainer>
        {editable ? (
          <UpdateBtn onClick={() => updateComment()}>UPDATE</UpdateBtn>
        ) : null}
      </Container>
      {visible ? (
        <ContentContainerReply>
          <ContentReply onChange={(e) => onChangeHandler(e)}></ContentReply>
          <ImageReply src={currentUser.image.png}></ImageReply>
          <ReplyUpdateBtn onClick={() => replyHandler()}>REPLY</ReplyUpdateBtn>
        </ContentContainerReply>
      ) : null}
      <RepliesContainer parentId={el.id} replies={el.replies} />
    </>
  );
}

export default Comment;
