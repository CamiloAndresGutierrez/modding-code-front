import {
    baseURL
} from './constants'

export const fetchAllCategories = async () => {
    const categories = await fetch(`${baseURL}/categories/get`);
    return categories;
}