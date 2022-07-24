import React from 'react';
import { Routes, Route } from 'react-router-dom';
import XNavbar from './components/navbar';
import Drive from './Drive';
import Media from './Media';

const AppX = () => {
  return (
    <div>
      <XNavbar />
      <Routes>
        <Route path="/drive/*" element={<Drive />} />
        <Route path="/media/*" element={<Media />} />
      </Routes>
    </div>
  );
}

export default AppX;