import styles from './CartModal.module.css';
import { CartType } from '../../types/CartType';
import ReactDOM from 'react-dom';
import { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import CartHeader from './CartHeader/CartHeader';
import CartItems from './CartItems/CartItems';
import CartFooter from './CartFooter/CartFooter';

const Cart = () => {
    const cart = useSelector((state: CartType) => state.cart.cart);

    return (
        <div className={styles.cartContainer}>
            <h2>Cart</h2>
            <CartHeader />
            <CartItems cart={cart} />
            <CartFooter cart={cart} />
        </div>
    );
}

function CartModal({ onCartButtonClick }: { onCartButtonClick: () => void }) {
    const portalElement = document.getElementById('portal')!;
    const modalRef = useRef<HTMLDivElement>(null);

    const handleBackdropClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (modalRef.current && event.target === event.currentTarget) {
            onCartButtonClick();
        }
    }, [onCartButtonClick]);

    return ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div ref={modalRef} className={styles.modal}>
                <Cart />
            </div>
        </div>,
        portalElement
    );
}

export default CartModal;