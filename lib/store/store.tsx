import { createStore, applyMiddleware, combineReducers } from 'redux';
import { categoriesReducer } from '../reducers/categories';
import { minicourseReducer } from '../reducers/minicourse';
import thunkMiddleware from 'redux-thunk';

const combinedReducers = combineReducers({
    categories: categoriesReducer,
    currentMinicourse: minicourseReducer
})

export const initStore = () => createStore(combinedReducers, applyMiddleware(thunkMiddleware));
