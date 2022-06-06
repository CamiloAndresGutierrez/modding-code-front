import { SectionContent, VideoContent, VideosUrls } from "./videos";

export type Minicourse = {
    id?: string,
    creation_date?: number,
    updated_date?: number,
    data_state?: string,
    username?: string,
    visible?: Boolean,
    category_id?: string,
    name?: string,
    ext?: string,
    rate?: number,
    thumb_upload_url?: string,
    description?: string
};

export type InitialStateType = {
    currentMinicourse?: Minicourse,
    sectionsContent?: SectionContent[],
    currentVideo?: VideoContent,
    videosUrls?: VideosUrls[]
}