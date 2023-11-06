import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
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
              <button aria-label="Cart" className={styles.navItem}>
                  <img src='/icons/navbar/cart.svg' alt='Cart icon' />
              </button>
          </div>
      </nav>
  );
}

export default NavBar;