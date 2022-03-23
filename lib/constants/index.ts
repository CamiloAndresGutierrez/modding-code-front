import colors from './colors';
import mediaQueries from './mediaQueries';
import USERS from './users';

const url = (path: string) => `${process.env.APIURL}${path}`;

const videoSections = [
    { slug: "CONTEXT", name: "Context" },
    { slug: "CODE", name: "Code" },
    { slug: "CODE_EXPLANATION", name: "Code explanation" }
];

export {
    colors,
    mediaQueries,
    USERS,
    url,
    videoSections
}
