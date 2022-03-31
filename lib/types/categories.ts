export type Category = {
    id?: string,
    creation_date?: number,
    updated_date?: number,
    data_state?: string,
    username?: string,
    visible?: Boolean,
    name?: string,
    description?: string
}

export type InitialStateType = {
    currentCategory?: Category
}