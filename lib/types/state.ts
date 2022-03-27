import { InitialStateType as CategoriesInitialStateType } from "./categories"
import { InitialStateType as MinicoursesInitialStateType } from "./minicourse"
import { InitialStateType as SiteInitialStateType } from "./site"

export type State = {
    categories: CategoriesInitialStateType,
    minicourses: MinicoursesInitialStateType,
    site: SiteInitialStateType
}