import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Landing from './components/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/landing' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
