import styles from './Features.module.css';

const Features = () => {
    return (
        <section className={styles.featuresContainer}>
            <h2>Elevate your <span>culinary experience</span> with Nutri<span>Chef</span></h2>
            <div>
                <article>
                    <h4>Plantbased recipes</h4>
                    <img src='/icons/overig/leaf.svg' alt='Icon indicating plantbased food' />
                </article>
                <article>
                    <h4>Nutrition awareness</h4>
                    <img src='/icons/overig/chart.svg' alt='Icon nutrition awareness' />
                </article>
                <article>
                    <h4>Budget friendly</h4>
                    <img src='/icons/overig/money.svg' alt='Icon indicating budget friendly recipes' />
                </article>
            </div>
        </section>
    );
}

export default Features;