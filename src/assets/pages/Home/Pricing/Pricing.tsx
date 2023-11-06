import styles from './Pricing.module.css';
import Button from '../../../components/Button/Button';

const Pricing = () => {
    return (
        <section className={styles.pricingContainer}>
            <h1>Weekly Top Recipes</h1>
            <div>
                <article>
                    <h2>One Recipe</h2>
                    <h5>€1</h5>
                    <p>€1/recipe</p>
                    <Button>Get Started</Button>
                </article>
                <article>
                    <h2>Three Recipes</h2>
                    <h5>€3</h5>
                    <p>€0,60/recipe</p>
                    <Button>Get Started</Button>
                </article>
                <article>
                    <h2>Ten Recipes</h2>
                    <h5>€5</h5>
                    <p>€0,50/recipe</p>
                    <Button>Get Started</Button>
                </article>
            </div>
        </section>
    );
}

export default Pricing;