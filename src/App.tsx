import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Routes, Route } from 'react-router-dom'
import HeroPageList from './pages/HeroPageList'
import Header from './components/Header'
import HeroPage from './pages/HeroPage'
import NotFoundPage from './pages/NotFoundPage'
import Basket from './components/Basket'
import HomePage from './pages/HomePage'
import BasketPage from './pages/BasketPage'

const App: React.FC = () => {
  return (
    <>
      <Basket />
      <Header children={undefined} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HeroPageList/:id" element={<HeroPageList />} />
        <Route path="/HeroPage/:category/:id" element={<HeroPage />} />
        <Route path="BasketPage" element={<BasketPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
