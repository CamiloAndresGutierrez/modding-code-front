import { videoSections } from "lib/constants";

export const isObjectEmpty = (obj: any) => {
    return Object.keys(obj).length === 0;
}

export const getParamsFromUrl = (url) => {
    const newUrl = new URL(url);
    const params = new URLSearchParams(newUrl.search);
    let paramsObj = {};
    params.forEach((value, key) => {
        paramsObj = {
            ...paramsObj,
            [key]: value
        }
    });

    return paramsObj
};

export const createSections = (minicourseVideos) => {
    return videoSections.map(videoSection => ({
        sectionName: videoSection.name,
        sectionSlug: videoSection.slug,
        videos: minicourseVideos
            .filter(minicourseVideo => {
                const { section, visible } = minicourseVideo;
                return (section === videoSection.slug && visible) ? minicourseVideo : null;
            })
            .map(filteredVideos => {
                const { name, id, section, order, visible } = filteredVideos;
                return (section === videoSection.slug) ? ({ name, id, order, visible }) : null;
            })
            .sort((a, b) => {
                const aOrder = a.order;
                const bOrder = b.order;
                return (aOrder < bOrder) ? -1 : (aOrder > bOrder) ? 1 : 0;
            })
    }));
};

export const createSectionsExperts = (minicourseVideos) => {
    return videoSections.map(videoSection => ({
        sectionName: videoSection.name,
        sectionSlug: videoSection.slug,
        videos: minicourseVideos
            .filter(minicourseVideo => {
                const { section, visible } = minicourseVideo;
                return (section === videoSection.slug) ? minicourseVideo : null;
            })
            .map(filteredVideos => {
                const { name, id, section, order, visible } = filteredVideos;
                return (section === videoSection.slug) ? ({ name, id, order, visible }) : null;
            })
            .sort((a, b) => {
                const aOrder = a.order;
                const bOrder = b.order;
                return (aOrder < bOrder) ? -1 : (aOrder > bOrder) ? 1 : 0;
            })
    }));
};

export const responseHasErrors = (response: any, message = null) => {
    const isUnathorized = response?.message === "Unauthorized";
    const hasError = response === "Error" || isUnathorized;
    if (message && hasError) alert(message);
    return hasError;
}