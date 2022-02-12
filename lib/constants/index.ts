import colors from './colors';
import mediaQueries from './mediaQueries';
import USERS from './users';

const url = (path: string) => `${process.env.APIURL}${path}`;

export {
    colors,
    mediaQueries,
    USERS,
    url
}
