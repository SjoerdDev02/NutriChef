import styles from './Ingredients.module.css';

const Ingredients = ({ ingredients }: { ingredients: string[] }) => {
    return (
        <article className={styles.ingredientsContainer}>
            <p>Ingredients:</p>
            <p>{ingredients.slice(0, 5).toString()}</p>
        </article>
    );
}

export default Ingredients;