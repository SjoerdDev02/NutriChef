import styles from './NavBar.module.css';
import { CartType } from '../../types/CartType';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = ({ onCartButtonClick }: { onCartButtonClick: () => void }) => {
    const [amount, setAmount] = useState(0);

    const cart = useSelector((state: CartType) => state.cart.cart);

    useEffect(() => {
        const totalAmount = cart.reduce((total, cartItem) => total + cartItem.amount, 0);
        setAmount(totalAmount);
    }, [cart]);

    const root = document.documentElement;
    root.style.setProperty('--amount', `'${amount}'`);

    return (
        <nav role="navigation" className={styles.navBar}>
            <NavLink aria-label='Home' to='/' className={styles.logo}>
                <h1>Nutri<span>Chef</span></h1>
            </NavLink>
            <div>
                <NavLink aria-label="Recipes" to='/recipes' className={styles.navItem}>
                    <h3>Recipes</h3>
                    <img src='/icons/navbar/recipes.svg' alt='Recipes icon' />
                </NavLink>
                <button aria-label="Cart" className={styles.navItem} onClick={onCartButtonClick}>
                    <img src='/icons/navbar/cart.svg' alt='Cart icon' />
                </button>
            </div>
        </nav>
    );
}

export default NavBar;