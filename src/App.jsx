import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/products/:allProducts' element={<ItemListContainer/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/detail/:detailId' element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
