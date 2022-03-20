import { SectionContent, VideoContent, VideosUrls } from "./videos";

export type Minicourse = {
    id?: string,
    creation_date?: number,
    updated_date?: number,
    data_state?: "ACTIVE" | "INACTIVE",
    username?: string,
    visible?: Boolean,
    category_id?: string,
    name?: string,
    ext?: string,
    rate?: null
};

export type InitialStateType = {
    currentMinicourse: Minicourse,
    sectionsContent: SectionContent[],
    currentVideo: VideoContent,
    videosUrls: VideosUrls[]
}