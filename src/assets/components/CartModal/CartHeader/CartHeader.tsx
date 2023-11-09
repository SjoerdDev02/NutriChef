import styles from './CartHeader.module.css';

const CartHeader = () => {
    return (
        <div className={styles.cartHeader}>
            <h4>Products</h4>
            <div>
                <h4>Amount</h4>
                <h4>Price</h4>
            </div>
        </div>
    );
}

export default CartHeader;