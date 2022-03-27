import { createStore, applyMiddleware, combineReducers } from 'redux';
import { categoriesReducer } from '../reducers/categories';
import { minicoursesReducer } from '../reducers/minicourses';
import { siteReducer } from '../reducers/site';
import thunkMiddleware from 'redux-thunk';

const combinedReducers = combineReducers({
    categories: categoriesReducer,
    minicourses: minicoursesReducer,
    site: siteReducer,
})

export const initStore = () => createStore(combinedReducers, applyMiddleware(thunkMiddleware));
