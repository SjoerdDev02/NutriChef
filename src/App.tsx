import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './assets/pages/Home/Home';
import Recipes from './assets/pages/Recipes/Recipes';
import Checkout from './assets/pages/Checkout/Checkout';
import NotFound from './assets/pages/NotFound/NotFound';
import { useSelector } from 'react-redux';
import { CartItemType, CartType } from './assets/types/CartType';

const ProtectedRoute = ({ cart }: { cart: CartItemType[] }) => {
    if (cart.length === 0) {
        return <Navigate to='/' replace />;
    }

    return <Outlet />;
};

function App() {
    const cart = useSelector((state: CartType) => state.cart.cart);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/recipes' element={<Recipes />} />
                    <Route element={<ProtectedRoute cart={cart} />}>
                        <Route path='checkout' element={<Checkout />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
