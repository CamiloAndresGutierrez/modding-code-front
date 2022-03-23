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

export const convertFileToBinaryString = (file: File): Promise<ArrayBuffer | string> => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsBinaryString(file);
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.onerror = error => reject(error);
    });
};

export const createSections = (minicourseVideos) => {
    return videoSections.map(videoSection => ({
        sectionName: videoSection.name,
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