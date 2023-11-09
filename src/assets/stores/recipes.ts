import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
    },
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload
        }
    }
});

export const { setRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;