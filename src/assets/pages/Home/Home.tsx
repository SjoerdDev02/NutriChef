import styles from "./Home.module.css";
import { RootStateType } from "../../types/RootStateType";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MainLayout from "../../layouts/MainLayout";
import CTAButton from "../../components/CtaButton/CtaButton";
import Features from "./Features/Features";
import WeeklyRecipes from "./WeeklyRecipes/WeeklyRecipes";
import Pricing from "./Pricing/Pricing";
import Footer from "../../components/Footer/Footer";
import RecipeModal from "../../components/RecipeModal/RecipeModal";
import SuccessMessage from "./SuccessMessage/SuccessMessage";

const Home = () => {
    const showModal = useSelector(
        (state: RootStateType) => state.modal.showModal
    );
    const [showMessage, setShowMessage] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            setShowMessage(location.state);
            const timeout = setTimeout(() => {
              setShowMessage(false);
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [location]);

    const backgroundImg = {
        phone: "/backgrounds/home/phone-home-bg.jpg",
        desktop: "/backgrounds/home/desktop-home-bg.jpg",
    };

    return (
        <>
          <MainLayout background={backgroundImg}>
              {showMessage && <SuccessMessage />}
              <div className={styles.homeContainer}>
                  <h1>Nutri<span>Chef</span></h1>
                  <h3>Discover the joy of wholesome cooking with our vibrant selection of nourishing recipes for a healthier and happier lifestyle.</h3>
                  <CTAButton page="/recipes">Start your culinary journey</CTAButton>
              </div>
          </MainLayout>
          <Features />
          <WeeklyRecipes />
          <Pricing />
          <Footer />
          {showModal && <RecipeModal />}
        </>
    );
}

export default Home;