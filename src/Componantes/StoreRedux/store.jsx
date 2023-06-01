import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from "./reducer";
import {TweetSlice} from './reducer'
import authReducer from './reducer';



const store = configureStore({
    reducer:{
        auth: authReducer,
        user:userSlice.reducer,
        Tweets:TweetSlice.reducer,
    }
})




export default store;