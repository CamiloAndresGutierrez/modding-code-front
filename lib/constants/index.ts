import colors from './colors';
import mediaQueries from './mediaQueries';
import USERS from './users';

const url = (path: string) => {
    const restApi = path.split('/')[1];
    switch (restApi) {
        case "minicourse":
            return `${process.env.MINICOURSE_REST_API}${path}`
        case "problem":
            return `${process.env.PROBLEM_REST_API}${path}`
        case "video":
            return `${process.env.VIDEO_REST_API}${path}`
        case "user":
            return `${process.env.USER_REST_API}${path}`
    }
};

const videoSections = [
    { slug: "CONTEXT", name: "Context" },
    { slug: "PREPARATION", name: "Preparation" },
    { slug: "CONTENT", name: "Content" },
    { slug: "EXAMPLES", name: "Examples" },
    { slug: "FINISHING_UP", name: "Finishing Up" }
];

export {
    colors,
    mediaQueries,
    USERS,
    url,
    videoSections
}
