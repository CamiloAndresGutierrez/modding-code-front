import {
    url
} from '../constants'

export const fetchAllCategories = async () => {
    const categories = await fetch(url("/categories/get"));
    return categories;
}
