import { createStore, applyMiddleware, combineReducers } from 'redux';
import { categoriesReducer } from '../reducers/categories';
import thunkMiddleware from 'redux-thunk';

const combinedReducers = combineReducers({
    categories: categoriesReducer
})

export const initStore = () => createStore(combinedReducers, applyMiddleware(thunkMiddleware));
