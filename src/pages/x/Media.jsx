import React from 'react';
import XSidebarMedia from './components/sidebar_media'
import { Routes, Route } from 'react-router-dom';

const T = () => <h1>Hello</h1>

const Media = () => {
  return (
    <div>
      <XSidebarMedia />
      <div className="x-con">
        <Routes>
          <Route path="/" element={<T />} />
          <Route path="/videos" element={<T />} />
          <Route path="/docs" element={<T />} />
          <Route path="/fav" element={<T />} />
        </Routes>
      </div>
    </div>
  );
}

export default Media;
