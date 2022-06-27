import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Basket, Header } from 'components'
import Profile from 'pages/Profile/Profile'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
        <Route path="/" element={<Login />} />
        <Route path="/HeroPageList/:id" element={<HeroPageList />} />
        <Route path="/HeroPage/:category/:id" element={<HeroPage />} />
        <Route path="BasketPage" element={<BasketPage />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
