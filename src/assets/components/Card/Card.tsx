import styles from './Card.module.css';
import { RecipeType } from '../../types/RecipeType';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setCart } from '../../stores/cart';
import { setModal } from '../../stores/modal';
import Rating from '../Rating/Rating';
import Button from '../Button/Button';

const Card = ({ recipe }: { recipe: RecipeType }) => {
    const title = useMemo(() => {
        const titleWordsSeparated = recipe.title.trim().split(/\s+/);
        return titleWordsSeparated.length <= 3 ? titleWordsSeparated.slice(0, 3).join(' ') : `${titleWordsSeparated.slice(0, 3).join(' ')}...`;
    }, [recipe.title]);

    const dispatch = useDispatch();

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLDivElement;
        if (target.nodeName !== 'BUTTON') {
            dispatch(setModal({ index: recipe.id, showModal: true }));
        }
    };

    return (
      <article className={styles.cardContainer} onClick={handleBackdropClick}>
          <img src={recipe.image} alt='Dynamically loaded image of the recipe' />
          <div>
              <div>
                  <h4>{title}</h4>
                  <Rating rating={recipe.rating} />
              </div>
              <Button onClick={() => dispatch(setCart({ amount: 1, image: recipe.image, title: recipe.title }))}>Add To Cart</Button>
          </div>
      </article>
    );
}

export default Card;