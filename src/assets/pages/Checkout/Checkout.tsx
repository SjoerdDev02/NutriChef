import styles from './Checkout.module.css';
import PayForm from "./PayForm/PayForm";
import Orders from './Orders/Orders';

const Checkout = () => {
    return (
        <main className={styles.checkoutPage}>
            <section className={styles.checkoutContainer}>
                <h1>Nutri<span>Chef</span></h1>
                <div>
                    <PayForm />
                    <Orders />
                </div>
            </section>
        </main>
    );
}

export default Checkout;