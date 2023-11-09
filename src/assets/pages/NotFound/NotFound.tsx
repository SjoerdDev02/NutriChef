import styles from "./NotFound.module.css";
import CTAButton from "../../components/CtaButton/CtaButton";

const NotFound = () => {
    return (
        <main className={styles.notFound}>
            <section>
                <h1>Nutri<span>Chef</span></h1>
                <h2>Page not found</h2>
                <p>Sorry, we couldn't find the page you were looking for. Check your spelling and otherwise use the button to go to the Homepage</p>
                <CTAButton page="/">Go to the Homepage</CTAButton>
            </section>
        </main>
    );
}

export default NotFound;
