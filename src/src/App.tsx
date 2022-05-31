import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomaPage/HomePage';
import Header from './components/Header/Header';
import HeroPage from './pages/HeroPage/HeroPage';
import { useState, useContext } from 'react';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { store } from './Store/store';

const App: React.FC = () => {

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
          element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
