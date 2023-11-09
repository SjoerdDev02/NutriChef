import styles from './RecipeContainer.module.css';
import { RootStateType } from '../../../types/RootStateType';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCart } from '../../../stores/cart';
import Ingredients from '../Ingredients/Ingredients';
import Diets from '../Diets/Diets';
import Time from '../Time/Time';
import Chart from '../Chart/Chart';
import Button from '../../Button/Button';
import RatingContainer from '../RatingContainer/RatingContainer';

const RecipeContainer = () => {
    const dispatch = useDispatch();

    const index = useSelector((state: RootStateType) => state.modal.index) as number;
    const recipe = useSelector((state: RootStateType) => state.recipes.recipes)[index];

    return (
        <section className={styles.recipeContainer}>
            <div className={styles.left}>
                <img src={recipe.image} alt='Dynamically loaded image of the dish' />
                <h1>{recipe.title}</h1>
                <RatingContainer rating={recipe.rating} />
            </div>
            <div className={styles.right}>
                <div>
                    <div className={styles.rightHeader}>
                        <Diets diets={recipe.diets} />
                        <Time time={recipe.time} />
                    </div>
                    <Chart cal={recipe.nutrition.kCal} total={recipe.nutrition.totalWeight} carbs={recipe.nutrition.carbs} fats={recipe.nutrition.fats} protein={recipe.nutrition.protein} />
                    <Ingredients ingredients={recipe.ingredients} />
                </div>
                <div className={styles.btn}>
                    <Button onClick={() => dispatch(setCart({ amount: 0, image: recipe.image, title: recipe.title }))}>Add To Cart</Button>
                </div>
            </div>
        </section>
    );
}

export default RecipeContainer;