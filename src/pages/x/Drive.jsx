import React from 'react';
import XSidebarDrive from './components/sidebar_drive';
import { Route, Routes } from 'react-router-dom';
import DriveHome from './DriveHome';

const XDrive = () => {
  return (
    <div>
      <XSidebarDrive />
      <div className="x-con">
        <Routes>
          <Route path="/" element={<DriveHome />} />
          <Route path="/recent" element={<DriveHome />} />
          <Route path="/trash" element={<DriveHome />} />
          <Route path="/shared" element={<DriveHome />} />
          <Route path="/link" element={<DriveHome />} />
        </Routes>
      </div>
    </div>
  );
}

export default XDrive;
