import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
};

const userSlice = createSlice({
  name: "User",
  initialState: JSON.parse(localStorage.getItem("users")) || [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },
  },
});
const TweetSlice = createSlice({
  name: "Tweets",
  initialState: [],
  reducers: {
    AddAllTweet: (state, action) => {
      state.push(...action.payload);
    },
    addretweet: (state, action) => {
      const { id } = action.payload;
      const data = state.find((item) => item.id === id);
      data.reTweetsCount++;
    },
    addComment: (state, action) => {
      const { id } = action.payload;
      const data = state.find((item) => item.id === id);
      data.commentCount++;
    },
    addLike: (state, action) => {
      const { id } = action.payload;
      const data = state.find((item) => item.id === id);
      if (data.isLiked === true) {
        data.likeCount--;
      } else {
        data.likeCount++;
      }
      data.isLiked = !data.isLiked;
    },
    addTweet: (state, action) => {
      state.unshift(action.payload);
    },
  },
});


export { userSlice , TweetSlice };
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload;
      localStorage.setItem('token', action.payload); // Store the token in localStorage
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem('token'); // Remove the token from localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;