import Card from '../../../components/Card/Card';
import styles from './WeeklyRecipes.module.css';

const WeeklyRecipes = () => {
    return (
        <section className={styles.weeklyRecipesContainer}>
            <h1>Weekly Top Recipes</h1>
            <div>
                <Card imgSrc='/mock/mealOne.png' title='Black Pasta' rating={4} />
                <Card imgSrc='/mock/mealTwo.png' title='Black Pasta' rating={2} />
                <Card imgSrc='/mock/mealThree.png' title='Black Pasta' rating={3} />
                <Card imgSrc='/mock/mealThree.png' title='Black Pasta' rating={3} />
            </div>
        </section>
    );
}

export default WeeklyRecipes;