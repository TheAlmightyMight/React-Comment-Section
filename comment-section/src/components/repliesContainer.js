import React from "react";
import Reply from "./reply";

function RepliesContainer({ replies, parentId }) {
  return (
    <>
      {replies.map((el) => {
        return <Reply key={el.id} parentId={parentId} el={el} />;
      })}
    </>
  );
}

export default RepliesContainer;
