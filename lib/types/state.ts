import { InitialStateType as CategoriesInitialStateType } from "./categories"
import { InitialStateType as MinicoursesInitialStateType } from "./minicourse"

export type State = {
    categories: CategoriesInitialStateType,
    minicourses: MinicoursesInitialStateType
}