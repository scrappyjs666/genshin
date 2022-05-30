import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomaPage/HomePage';
import Header from './components/Header/Header';
import HeroPage from './pages/HeroPage/HeroPage';
import { useState } from 'react';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Header 
        children={undefined}/>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage />} />
        <Route 
          path="/HeroPage/:id" 
          element={<HeroPage />} />
        <Route 
          path="*" 
          element={<HeroPage />} />
      </Routes>
    </>
  );
}

export default App;
