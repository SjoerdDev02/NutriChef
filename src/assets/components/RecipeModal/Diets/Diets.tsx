import styles from './Diets.module.css';

const Diets = ({ diets }: { diets: string[] }) => {
    return (
        <article className={styles.dietsContainer}>
            {diets.slice(0, 2).map((diet, index) => (
                <li key={index}>{diet}<img src='/icons/overig/check.svg' alt='Check icon' /></li>
            ))}
        </article>
    );
}

export default Diets;