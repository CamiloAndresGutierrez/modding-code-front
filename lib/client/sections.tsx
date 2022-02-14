import {
    url
} from '../constants';

export const fetchSections = async (minicourseId) => {
  const sections = await fetch(url(`/sections/get`));
  return sections;
};
