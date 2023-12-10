import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Popup from './components/Popup';


const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="App">
      <Router>
        <div>
          {isPopupOpen && <Popup onClose={closePopup} title='error' >dkeke</Popup>}
        </div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
