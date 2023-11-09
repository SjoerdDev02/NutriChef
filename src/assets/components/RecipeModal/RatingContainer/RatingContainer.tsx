import styles from './RatingContainer.module.css';
import Rating from '../../Rating/Rating';

const RatingContainer = ({ rating }: { rating: number }) => {
    return (
        <article className={styles.ratingContainer}>
            <Rating rating={rating} />
        </article>
    );
}

export default RatingContainer;