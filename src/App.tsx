import { Basket, Header, Loader } from 'components'
import Container from 'components/Container/Container'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'

const Profile = React.lazy(
  () => import(/* webpackChunkName: "Profile" */ 'pages/Profile/Profile')
)
const BasketPage = React.lazy(
  () => import(/* webpackChunkName: "BasketPage" */ './pages/BasketPage')
)
const HeroPage = React.lazy(
  () => import(/* webpackChunkName: "HeroPage" */ './pages/HeroPage')
)
const HeroPageList = React.lazy(
  () => import(/* webpackChunkName: "HeroPageList" */ './pages/HeroPageList')
)
const HomePage = React.lazy(
  () => import(/* webpackChunkName: "HomePage" */ './pages/HomePage')
)
const NotFoundPage = React.lazy(
  () => import(/* webpackChunkName: "NotFoundPage" */ './pages/NotFoundPage')
)

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Container>
          <Basket />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/HeroPageList/:id" element={<HeroPageList />} />
            <Route path="/HeroPage/:category/:id" element={<HeroPage />} />
            <Route path="BasketPage" element={<BasketPage />} />
            <Route path="HomePage" element={<HomePage />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </Suspense>
    </>
  )
}

export default App
