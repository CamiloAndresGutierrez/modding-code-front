export type Video = {
    id?: string,
    creation_date?: number,
    updated_date?: number,
    data_state?: "ACTIVE" | "INACTIVE",
    username?: string,
    visible?: Boolean,
    name?: string,
    ext?: string,
    minicourse_id?: string,
    section?: string,
    order?: number,
    video_download_url?: string,
}

export type Section = {
    name?: string,
    order?: number,
};

export type SectionContent = {
    section?: Section,
    videos?: Video[]
}

export type InitialStateType = {
    sectionsContent: SectionContent[]
};

export type VideoContent = {
    name?: string,
    video?: string,
    sectionName?: string,
}

export type VideosUrls = {
    id?: string,
    videoUrl?: string,
}

export interface ISections {
    sectionName?: string,
    sectionSlug?: string,
    videos?: Video[],
}