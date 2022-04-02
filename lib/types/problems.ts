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
    test_case?: TestCase[],
    difficulty?: number,
    status?: string
}

export type ProblemDescription = {
    description: string,
    sample_input: string,
    sample_output: string,
}

export type TestCase = {
    id?: string,
    creation_date?: number,
    updated_date?: number,
    data_state?: string,
    username?: string,
    visible?: Boolean,
    input_name?: string,
    output_name?: string,
    input_id?: string,
    output_id?: string,
    input_data?: string,
    output_data?: string
}

export type InputVeredict = {
    id: string,
    veredict: string
}

export type Evaluation = {
    id: string,
    creation_date: number,
    data_state: string,
    inputs_veredict: InputVeredict[],
    problem_id: string,
    username: string,
    veredict: string
}