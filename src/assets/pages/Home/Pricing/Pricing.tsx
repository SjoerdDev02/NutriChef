import styles from "./Pricing.module.css";
import CTAButton from "../../../components/CtaButton/CtaButton";

const Pricing = () => {
    return (
        <section className={styles.pricingContainer}>
            <h2>Weekly Top Recipes</h2>
            <div>
                <article>
                    <h2>One Recipe</h2>
                    <h5>€1</h5>
                    <p>€1/recipe</p>
                    <CTAButton page="/recipes">Get Started</CTAButton>
                </article>
                <article>
                    <h2>Three Recipes</h2>
                    <h5>€3</h5>
                    <p>€0,60/recipe</p>
                    <CTAButton page="/recipes">Get Started</CTAButton>
                </article>
                <article>
                    <h2>Ten Recipes</h2>
                    <h5>€5</h5>
                    <p>€0,50/recipe</p>
                    <CTAButton page="/recipes">Get Started</CTAButton>
                </article>
            </div>
        </section>
    );
}

export default Pricing;