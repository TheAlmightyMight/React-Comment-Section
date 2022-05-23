import React from "react";
import Reply from "./reply";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

function RepliesContainer({ replies }) {
  return (
    <>
      {replies.map((el) => {
        return <Reply key={el.id} el={el} />;
      })}
    </>
  );
}

export default RepliesContainer;
