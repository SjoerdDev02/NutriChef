import MainLayout from "../../layouts/MainLayout";
import Button from "../../components/Button/Button";
import styles from './Home.module.css';
import Features from './Features/Features';
import WeeklyRecipes from "./WeeklyRecipes/WeeklyRecipes";
import Pricing from "./Pricing/Pricing";

const Home = () => {
  const backgroundImg = {
      phone: '/backgrounds/home/phone-home-bg.jpg',
      desktop: '/backgrounds/home/desktop-home-bg.jpg',
  }

    return (
        <>
            <MainLayout background={backgroundImg}>
                <div className={styles.homeContainer}>
                        <h1>Nutri<span>Chef</span></h1>
                        <h3>Discover the joy of wholesome cooking with our vibrant selection of nourishing recipes for a healthier and happier lifestyle.</h3>
                        <Button>Start your culinary journey</Button>
                </div>
            </MainLayout>
            <Features />
            <WeeklyRecipes />
            <Pricing />
        </>
    );
}

export default Home;