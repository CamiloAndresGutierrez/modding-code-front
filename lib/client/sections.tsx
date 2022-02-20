import {
    url
} from '../constants';

export const fetchSections = async () => {
  const sections = await fetch(url(`/sections/get`));
  return sections;
};
