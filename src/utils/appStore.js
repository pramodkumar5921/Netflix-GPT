import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "../utils/userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer:{
        user: useReducer,
        movies : moviesReducer,
        gpt : gptReducer,
    },
});

export default appStore;