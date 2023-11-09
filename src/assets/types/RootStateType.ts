import { RecipeType } from "./RecipeType";

export type RootStateType = {
    recipes: {
        recipes: RecipeType[],
    },
    modal: {
        index: number | null,
        showModal: boolean,
    },
}