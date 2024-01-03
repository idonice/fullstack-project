import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderWrapper from './components/header/HeaderWrapper';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AuthPage from './pages/AuthPage';
import CategoryPage from './pages/CategoryPage';
import { IProduct } from './types';
import computers from "./products";
// import CartPage from './pages/CartPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <HeaderWrapper />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          {/* <Route path='/cart' element={<CartPage />} /> */}
          <Route path="/p/?id" element={<ProductPage />} />
          <Route path='/p/:c/:sc?' element={<CategoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
