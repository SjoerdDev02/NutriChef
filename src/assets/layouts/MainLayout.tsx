import NavBar from "../components/navigation/NavBar";
import styles from './MainLayout.module.css';

type BackgroundProps = {
  phone: string,
  desktop: string,
}

const MainLayout = ({ children, background }: { children: React.ReactNode, background: BackgroundProps }) => {
  const root = document.documentElement;
  root.style.setProperty('--backgroundImg-phone', `url(${background.phone})`);
  root.style.setProperty('--backgroundImg-desktop', `url(${background.desktop})`);

  return (
      <div className={styles.layoutContainer}>
          <NavBar />
          <main role='main'>{children}</main>
      </div>
  );
}

export default MainLayout;