import styles from './Card.module.css';
import Rating from './Rating/Rating';
import Button from '../Button/Button';

const Card = ({ imgSrc, title, rating }: { imgSrc: string, title: string, rating: number }) => {
  return (
    <article className={styles.cardContainer}>
        <img src={imgSrc} alt='Dynamically loaded image of the recipe' />
        <div>
            <div>
                <h4>{title}</h4>
                <Rating rating={rating} />
            </div>
            <Button>Add To Cart</Button>
        </div>
    </article>
  )
}

export default Card