import { useState, useEffect, useMemo } from 'react';
import Card from '../../../components/Card/Card';
import { RecipeType } from '../../../types/RecipeType';
import styles from './WeeklyRecipes.module.css';
import useGetRecipes from '../../../hooks/useGetRecipes';

const WeeklyRecipes = () => {
    const [recipes, setRecipes] = useState<RecipeType[]>([]);

    const getRecipes = useGetRecipes();

    useEffect(() => {
        const fetchRecipesData = async () => {
            const data: RecipeType[] = await getRecipes(undefined, undefined);
            setRecipes(data);
        };
        fetchRecipesData();
    }, []);

    const recipeCards = useMemo(() => recipes.slice(0, 4).map((recipe, index) => (
        <Card key={index} recipe={recipe} />
    )), [recipes]);

    return (
        <section className={styles.weeklyRecipesContainer}>
            <h2>Weekly Top Recipes</h2>
            <div>
                {recipeCards}
            </div>
        </section>
    );
};

export default WeeklyRecipes;