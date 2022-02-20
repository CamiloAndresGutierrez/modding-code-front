export type InputFields = {
    field: string,
    type: string,
    placeHolder: string,
}

export type UserType = "student" | "expert";

export type Category = {
    id: number,
    name: string,
    description: string,
    path: string
}
