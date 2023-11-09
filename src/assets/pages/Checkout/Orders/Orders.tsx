import styles from './Orders.module.css';
import { useMemo } from 'react';
import { CartItemType, CartType } from '../../../types/CartType';
import { useSelector } from 'react-redux';

const Order = ({ title, amount }: { title: string, amount: number }) => {
    return (
        <article>
            <p>{title}</p>
            <div>
                <p>{amount}x</p>
                <p>{`€${amount * 1},00`}</p>
            </div>
        </article>
    );
}

const Orders = () => {
    const cart = useSelector((state: CartType) => state.cart.cart);

    const totalAmount = useMemo(() => cart.reduce((total, cartItem) => total + cartItem.amount, 0), [cart]);

    const cartItemsArr = useMemo(() => {
        return cart.map((cartItem: CartItemType, index) => (
            <Order key={index} title={cartItem.title} amount={cartItem.amount} />
        ));
    }, [cart]);

    return (
        <section className={styles.orderContainer}>
            <h3>Order</h3>
            <div>
                <div>
                    {cartItemsArr}
                </div>
                <article>
                    <p>Total</p>
                    <p>{`€${totalAmount},00`}</p>
                </article>
            </div>
        </section>
    );
}

export default Orders;