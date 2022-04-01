export type Problem = {
    id?: string,
    creation_date?: number,
    updated_date?: number,
    data_state?: string,
    username?: string,
    visible?: Boolean,
    name?: string,
    minicourse_id?: string,
    description?: ProblemDescription,
    test_case?: string,
    difficulty?: number,
    status?: string
}

export type ProblemDescription = {
    description: string,
    sample_input: string,
    sample_output: string,
}