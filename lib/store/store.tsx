import { createStore, applyMiddleware, combineReducers } from 'redux';
import { categoriesReducer } from '../reducers/categories';
import { minicoursesReducer } from '../reducers/minicourses';
import thunkMiddleware from 'redux-thunk';

const combinedReducers = combineReducers({
    categories: categoriesReducer,
    minicourses: minicoursesReducer
})

export const initStore = () => createStore(combinedReducers, applyMiddleware(thunkMiddleware));
