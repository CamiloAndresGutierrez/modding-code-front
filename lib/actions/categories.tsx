import {  fetchAllCategories } from '../client/categories';
import { Category } from 'lib/types';

export const fetchCategoriesRequest = () => {
  return {
    type: 'GET_CATEGORIES_REQUEST',
  }
}

export const fetchCategoriesSuccess = (categories: Category[]) => {
  return {
    type: 'GET_CATEGORIES_SUCCESS',
    payload: categories
  }
}

export const fetchCategoriesFailure = error => {
  return {
    type: 'GET_CATEGORIES_FAILURE',
    payload: error
  }
}

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest);
    fetchAllCategories()
      .then(response => response.json())
      .then(r => dispatch(fetchCategoriesSuccess(r)))
      .catch(e => dispatch(fetchCategoriesFailure(e)));
  }
}
