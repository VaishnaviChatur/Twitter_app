import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: JSON.parse(localStorage.getItem("details")) || [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("details", JSON.stringify(state));
    },
  },
});


    export { userSlice };