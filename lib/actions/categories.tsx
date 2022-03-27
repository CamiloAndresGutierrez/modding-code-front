import { Category } from "lib/types/categories";

export const CategoryActionTypes = {
  SET_CURRENT_CATEGORY: 'SET_CURRENT_CATEGORY'
}

export const setCurrentCategory = (category: Category) =>
  ({ type: CategoryActionTypes.SET_CURRENT_CATEGORY, payload: category })
