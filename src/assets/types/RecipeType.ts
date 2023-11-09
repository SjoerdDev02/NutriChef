export type RecipeType = {
    id: number,
    title: string,
    image: string,
    cuisines: string[],
    diets: string[],
    time: number,
    ingredients: string[],
    rating: number,
    nutrition: {
        kCal: number,
        totalWeight: number,
        fats: number,
        carbs: number,
        protein: number,
    },
}