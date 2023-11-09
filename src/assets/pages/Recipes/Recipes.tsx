import styles from './Recipes.module.css';
import { RootStateType } from '../../types/RootStateType';
import { useSelector } from 'react-redux';
import MainLayout from '../../layouts/MainLayout';
import Footer from '../../components/Footer/Footer';
import RecipeSection from './RecipeSection/RecipeSection';
import RecipeModal from '../../components/RecipeModal/RecipeModal';

const Recipes = () => {
    const showModal = useSelector((state: RootStateType) => state.modal.showModal);

    const backgroundImg = {
      phone: '/backgrounds/recipes/phone-recipes-bg.jpg',
      desktop: '/backgrounds/recipes/desktop-recipes-bg.jpg',
    }

    return (
        <>
            <MainLayout background={backgroundImg}>
                <div className={styles.recipesContainer}>
                    <h1>Start your culinary journey today</h1>
                </div>
            </MainLayout>
            <RecipeSection />
            <Footer />
            {showModal && <RecipeModal />}
        </>
    );
}

export default Recipes;