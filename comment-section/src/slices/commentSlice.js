import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.concat({
        id: 1,
        content: action.content,
        createdAt: new Date(),
        score: action.score,
        user: {
          image: {
            png: "./images/avatars/image-amyrobson.png",
          },
          username: action.username,
        },
        replies: [],
      });
    },
  },
});
