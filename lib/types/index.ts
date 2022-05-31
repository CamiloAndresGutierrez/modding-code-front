import { ProblemDescription } from "./problems";

export type InputFields = {
    field: string,
    type: string,
    placeHolder: string,
}

export type UserType = "student" | "expert";

export type Method = 'POST' | 'GET' | 'PUT' | 'DELETE';

interface params {
    id?: string,
    get_thumb?: Boolean,
    ids?: string[],
    minicourse_id?: string,
    category_id?: string,
    problem_id?: string,
    get_video_url?: Boolean,
    visible?: Boolean,
}

export type RequestBodyType = {
    action?: string,
    params?: params,
    id?: string,
    name?: string,
    description?: string | ProblemDescription,
    category_id?: string,
    ext?: string,
    rate?: number,
    minicourse_id?: string,
    section?: string,
    problem_id?: string,
    file_input?: string,
    difficulty?: number,
    input_name?: string,
    output_name?: string,
    file_type?: string,
}
