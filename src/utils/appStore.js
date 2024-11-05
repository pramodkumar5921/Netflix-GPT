import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "../utils/userSlice";
import moviesReducer from "./movieSlice";


const appStore = configureStore({
    reducer:{
        user: useReducer,
        movies : moviesReducer,
    },
});

export default appStore;