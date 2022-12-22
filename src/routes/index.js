import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';

export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
    </Routes>
  );
}
