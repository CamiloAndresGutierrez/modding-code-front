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
}

export const convertFileToBinaryString = (file: File): Promise<ArrayBuffer | string> => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsBinaryString(file);
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.onerror = error => reject(error);
    });
}
