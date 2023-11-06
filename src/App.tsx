import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home/Home';
import Recipes from './assets/pages/Recipes/Recipes';
import Checkout from './assets/pages/Checkout/Checkout';
import NotFound from './assets/pages/NotFound/NotFound';

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/recipes' element={<Recipes />} />
                  <Route path='checkout' element={<Checkout />} />
                  <Route path='*' element={<NotFound />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
