import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  currentUser: {
    image: {
      png: "https://image.shutterstock.com/image-photo/confident-expert-handsome-young-man-260nw-201571940.jpg",
      webp: "",
    },
    username: "juliusomo",
  },
  loading: false,
  error: false,
};

// const getDate = () => {
//   let executed = false;
//   return function () {
//     if (executed === false) {
//       executed = true;
//       let d = Date.now();
//       return d;
//     }
//   };
// };
// const diffInMs = new Date(endDate) - new Date(startDate);
// const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async (_, { rejectWithValue }) => {
    try {
      const req = await fetch(`../data.json?${Math.random() * 10000}`);
      if (!req.ok) {
        throw new Error("Something wrong!");
      }
      const res = await req.json();
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      let date = new Date();
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: Date.now(),
            content: action.payload.text,
            createdAt: date.toLocaleDateString(),
            score: 0,
            user: {
              image: {
                png: state.currentUser.image.png,
              },
              username: state.currentUser.username,
            },
            replies: [],
          },
        ],
      };
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter((el) => {
        return el.id !== action.payload;
      });
    },
    updateCommentInfo: (state, action) => {
      state.comments = state.comments.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            content: action.payload.content,
            createdAt: state.createdAt - new Date(),
          };
        }
        return el;
      });
    },
    addReply: (state, action) => {
      let date = new Date();
      let map = state.comments.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            replies: [
              ...el.replies,
              {
                id: Date.now(),
                content: action.payload.content,
                createdAt: date.toLocaleDateString(),
                score: 0,
                replyingTo: action.payload.username,
                user: {
                  image: {
                    png: state.currentUser.image.png,
                  },
                  username: state.currentUser.username,
                },
              },
            ],
          };
        }
        return el;
      });
      // state.comments = map;
      return {
        ...state,
        comments: map,
      };
      // return (state.comments = state.comments.map((el) => {
      //   if (el.id === action.payload.id) {
      //     return {
      //       ...el,
      //       replies: [
      //         ...el.replies,
      //         {
      //           id: Date.now(),
      //           content: action.payload.content,
      //           createdAt: date.toLocaleDateString(),
      //           score: 0,
      //           replyingTo: action.payload.username,
      //           user: {
      //             image: {
      //               png: state.currentUser.image.png,
      //             },
      //             username: state.currentUser.username,
      //           },
      //         },
      //       ],
      //     };
      //   }
      //   return el;
      // }));
      // {
      //   id: Date.now(),
      //   content: action.payload.content,
      //   createdAt: date.toLocaleDateString(),
      //   score: 0,
      //   replyingTo: action.payload.username,
      //   user: {
      //     image: {
      //       png: state.currentUser.image.png,
      //     },
      //     username: state.currentUser.username,
      //   },
      // }
    },
    updateCommentDate: (state) => {
      state = {
        ...state,
        comments: state.comments.map((el) => {
          return { ...el, createdAt: Number(state.createdAt) - new Date() };
        }),
      };
    },
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.loading = false;
      state.comments = action.payload.comments;
      state.currentUser = action.payload.currentUser;
    },
    [fetchComments.rejected]: (state) => {
      state.loading = false;
      state.error = false;
    },
  },
});

export const { addComment, deleteComment, updateCommentInfo, addReply } =
  commentSlice.actions;
export default commentSlice.reducer;
