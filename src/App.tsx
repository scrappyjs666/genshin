import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomaPage/HomePage';
import Header from './components/Header/Header';
import Container from './components/Container/Container';

const App: React.FC = () => {
  return (
    <>
      <Header children={undefined}/>
      <Container>
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
