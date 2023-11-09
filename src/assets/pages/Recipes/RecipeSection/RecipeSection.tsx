import styles from './RecipeSection.module.css';
import { RecipeType } from '../../../types/RecipeType';
import { useState, useEffect, useMemo, useCallback } from 'react';
import useGetRecipes from '../../../hooks/useGetRecipes';
import Card from '../../../components/Card/Card';
import Dropdown from '../../../components/Dropdown/Dropdown';

const RecipeSection = () => {
    const [recipes, setRecipes] = useState<RecipeType[]>([]);
    const [cuisine, setCuisine] = useState<string | undefined>(undefined);
    const [diet, setDiet] = useState<string | undefined>(undefined);

    const getRecipes = useGetRecipes();

    useEffect(() => {
        const fetchRecipesData = async () => {
            const data: RecipeType[] = await getRecipes(cuisine, diet);
            setRecipes(data);
        };
        fetchRecipesData();
    }, [cuisine, diet]);

    const recipeCards = useMemo(() => recipes.slice(0, 12).map((recipe, index) => (
        <Card key={index} recipe={recipe} />
    )), [recipes]);

    const handleCuisineUpdate = useCallback((newCuisine: string) => {
        setCuisine(newCuisine);
    }, []);
    
    const handleDietUpdate = useCallback((newDiet: string) => {
        setDiet(newDiet);
    }, []);    

    const cuisineDropdown = useMemo(() => (
        <Dropdown 
            filter='Cuisine'
            activeValue={cuisine}
            values={['italian', 'french', 'mexican', 'nordic']}
            options={['Italian', 'French', 'Mexican', 'Nordic']}
            updateFunction={(option) => handleCuisineUpdate(option)}
        />
    ), [handleCuisineUpdate, cuisine]);
    
    const dietDropdown = useMemo(() => (
        <Dropdown
            filter='Diets'
            activeValue={diet}
            values={['balanced', 'high-protein', 'low-carb', 'low-fat']}
            options={['Balanced', 'High-Protein', 'Low-Carb', 'Low-Fat']}
            updateFunction={(option) => handleDietUpdate(option)}
        />
    ), [handleDietUpdate, diet]);

    return (
      <section className={styles.recipeSection}>
          <h1>Choose Your Recipes</h1>
          <div className={styles.recipeFilters}>
              {cuisineDropdown}
              {dietDropdown}
          </div>
          <div className={styles.recipes}>
              {recipeCards}
          </div>
      </section>
    );
}

export default RecipeSection;