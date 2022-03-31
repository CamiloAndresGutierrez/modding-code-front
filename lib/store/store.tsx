import { createStore, applyMiddleware, combineReducers } from 'redux';
import { categoriesReducer } from '../reducers/categories';
import { minicoursesReducer } from '../reducers/minicourses';
import { siteReducer } from '../reducers/site';
import thunkMiddleware from 'redux-thunk';
import { State } from 'lib/types/state';

const combinedReducers = combineReducers({
    categories: categoriesReducer,
    minicourses: minicoursesReducer,
    site: siteReducer,
})

export const initStore = (state?: State) => createStore(combinedReducers, state, applyMiddleware(thunkMiddleware));
