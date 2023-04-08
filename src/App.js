import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Landing from './components/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} exact />
          <Route path='/landing' element={<Landing />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
