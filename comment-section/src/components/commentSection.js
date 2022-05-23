import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Comment from "./comment";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments, addComment } from "../slices/commentSlice";

const Container = styled.section`
  margin-top: 5em;
  width: 800px;
  height: auto;
`;

const AddComment = styled.form`
  background-color: hsl(0, 0%, 100%);
  border-radius: 5px;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  margin-top: 20px;
  margin-bottom: 5em;
  position: relative;
`;

const Image = styled.img`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  left: 30px;
`;

const CommentInput = styled.textarea`
  height: 100px;
  width: 500px;
  border: 1.5px solid hsl(211, 10%, 45%);
  border-radius: 5px;
  font-family: inherit;
  outline: none;
  padding: 1.5em;
  resize: none;
`;

const SubmitBtn = styled.button`
  width: 100px;
  height: 50px;
  margin: 0 20px;
  color: hsl(0, 0%, 100%);
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  border-radius: 10px;
  background-color: hsl(238, 40%, 52%);
`;

function CommentSection() {
  const { comments } = useSelector((state) => state.comment);
  const { userName, image } = useSelector((state) => state.comment.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const [name, setName] = useState(userName);
  const [text, setText] = useState("");
  const textArea = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (text === "") {
      return null;
    }
    dispatch(addComment({ name, text }));
    setText("");
    textArea.current.value = "";
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <Container>
      {comments.map((el) => {
        return <Comment key={el.id} el={el} />;
      })}
      <AddComment action="submit">
        <Image src={image.png}></Image>
        <CommentInput
          ref={textArea}
          onChange={(e) => changeHandler(e)}
          type="text"
          placeholder="Add a comment"
        ></CommentInput>
        <SubmitBtn onClick={(e) => submitHandler(e)}>SEND</SubmitBtn>
      </AddComment>
    </Container>
  );
}

export default CommentSection;
