import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Basket from './components/Basket'
import Header from './components/Header'
import BasketPage from './pages/BasketPage'
import HeroPage from './pages/HeroPage'
import HeroPageList from './pages/HeroPageList'
import HomePage from './pages/HomePage'
import Login from './pages/Login/Login'
import NotFoundPage from './pages/NotFoundPage'

const App: React.FC = () => {
  return (
    <>
      <Basket />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HeroPageList/:id" element={<HeroPageList />} />
        <Route path="/HeroPage/:category/:id" element={<HeroPage />} />
        <Route path="BasketPage" element={<BasketPage />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
