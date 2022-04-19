import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware:any = createSagaMiddleware();
const reducers: any = combineReducers({});

export const store = configureStore(reducers);
