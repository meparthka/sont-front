import React from 'react';
import XNavbar from './components/navbar';
import XSidebar from './components/sidebar';

const XHome = () => {
  return (
    <div>
      <XNavbar />
      <XSidebar />
      <div className="x-con">
        <h1>Hello, World!</h1>
      </div>
    </div>
  );
}

export default XHome;
