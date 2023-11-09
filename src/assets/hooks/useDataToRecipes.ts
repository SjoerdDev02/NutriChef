import { RecipeType } from "../types/RecipeType";

type DataItemType = {
  recipe: {
    label: string;
    shareAs: string;
    images: {
      SMALL: {
        url: string;
      };
    };
    cuisineType: string[];
    dietLabels: string[];
    totalTime: number,
    ingredientLines: string[],
    totalNutrients: {
      ENERC_KCAL: {
        quantity: number;
      };
      FAT: {
        quantity: number;
      };
      CHOCDF: {
        quantity: number;
      };
      PROCNT: {
        quantity: number;
      };
    };
    totalWeight: number;
  };
};

const useDataToRecipes = () => {
    const dataToRecipes = (data: DataItemType[]) => {
        const recipeArr: RecipeType[] = [];

        data.forEach((recipe, index: number) => {
            const recipeObj: RecipeType = {
                id: index,
                title: recipe.recipe.label,
                image: recipe.recipe.images.SMALL.url,
                cuisines: recipe.recipe.cuisineType,
                diets: recipe.recipe.dietLabels,
                time: recipe.recipe.totalTime,
                ingredients: recipe.recipe.ingredientLines,
                rating: Math.floor(Math.random() * 5) + 1,
                nutrition: {
                    kCal: recipe.recipe.totalNutrients.ENERC_KCAL.quantity,
                    totalWeight: recipe.recipe.totalWeight,
                    fats: recipe.recipe.totalNutrients.FAT.quantity,
                    carbs: recipe.recipe.totalNutrients.CHOCDF.quantity,
                    protein: recipe.recipe.totalNutrients.PROCNT.quantity,
                },
            }
            recipeArr.push(recipeObj);
        });
        return recipeArr;
    }

    return dataToRecipes;
}

export default useDataToRecipes;