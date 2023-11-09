import styles from './MainLayout.module.css';
import { useState, useCallback } from "react";
import CartModal from "../components/CartModal/CartModal";
import NavBar from "../components/Navigation/NavBar";

type BackgroundProps = {
  phone: string,
  desktop: string,
}

const MainLayout = ({ children, background }: { children: React.ReactNode, background: BackgroundProps }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCartButtonClick = useCallback(() => {
    setShowModal((prevState) => !prevState);
  }, []);

  const root = document.documentElement;
  root.style.setProperty('--backgroundImg-phone', `url(${background.phone})`);
  root.style.setProperty('--backgroundImg-desktop', `url(${background.desktop})`);

  return (
      <div className={styles.layoutContainer}>
          <NavBar onCartButtonClick={handleCartButtonClick} />
          <section>{children}</section>
          {showModal && <CartModal onCartButtonClick={handleCartButtonClick} />}
      </div>
  );
}

export default MainLayout;