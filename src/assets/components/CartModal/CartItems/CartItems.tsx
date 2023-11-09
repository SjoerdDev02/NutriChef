import styles from './CartItems.module.css';
import { CartItemType } from '../../../types/CartType';
import { useMemo } from "react";
import { useDispatch } from 'react-redux';
import { incrementCart, decrementCart } from '../../../stores/cart';

const CartItem = ({ image, title, amount }: { image: string, title: string, amount: number }) => {
    const dispatch = useDispatch();

    return (
        <article className={styles.cartItem}>
            <div className={styles.left}>
                <img src={image} alt='Dynamically loaded image' />
                <p>{title}</p>
            </div>
            <div className={styles.right}>
                <div className={styles.changeAmountContainer}>
                    <button onClick={() => dispatch(decrementCart({ amount: 1, image: image, title: title }))}>-</button>
                    <p>{amount}</p>
                    <button onClick={() => dispatch(incrementCart({ amount: 1, image: image, title: title }))}>+</button>
                </div>
                <p>{`€${amount * 1},00`}</p>
            </div>
        </article>
    );
}

const CartItems = ({ cart }: { cart: CartItemType[] }) => {
    const cartItemsArr = useMemo(() => {
        return cart.map((cartItem: CartItemType, index: number) => (
            <CartItem key={index} image={cartItem.image} title={cartItem.title} amount={cartItem.amount} />
        ));
    }, [cart]);

    return (
        <>
            {cartItemsArr}
        </>
    );
}

export default CartItems;