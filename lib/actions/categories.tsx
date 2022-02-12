import { fetchAllCategories } from '../client/categories';

export const fetchCategoriesRequest = () => {
  return {
    type: 'GET_CATEGORIES_REQUEST',
  }
}

export const fetchCategoriesSuccess = categories => {
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
