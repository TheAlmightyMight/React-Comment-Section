import { GlobalStyle } from "./globalStyle";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentSection from "./components/commentSection";
import { getDate } from "./getDate";

function App() {
  const dispatch = useDispatch();
  const fn = getDate();
  return (
    <div
      style={{ display: "grid", placeItems: "center", height: "100vh" }}
      className="App"
    >
      <GlobalStyle />
      <CommentSection />
    </div>
  );
}

export default App;
