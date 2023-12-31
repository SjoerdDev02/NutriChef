import axios from 'axios';

const useFetchRecipes = () => {
  const fetchRecipes = async (kitchen: string | undefined, diet: string | undefined) => {
    const cuisine = kitchen ? `&cuisineType=${kitchen}` : '';
    const diets = diet ? `&diet=${diet}` : '';

    const APP_ID = 'YOUR_ID';
    const APP_KEY = 'YOUR_KEY';

    const url = `https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=${APP_ID}&app_key=${APP_KEY}${diets}&health=vegan${cuisine}&measure=gram&field=label&field=images&field=dietLabels&field=ingredientLines&field=totalWeight&field=totalTime&field=cuisineType&field=totalNutrients&field=totalTime`;

    try {
      const response = await axios.get(url);
      const data = response.data.hits;

      return data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return fetchRecipes;
};

export default useFetchRecipes;
