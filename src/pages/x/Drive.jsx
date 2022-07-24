import React from 'react';
import DriveHeader from './components/header';
import XSidebarDrive from './components/sidebar_drive';
import { Route, Routes } from 'react-router-dom';

const XDrive = () => {
  return (
    <div>
      <XSidebarDrive />
      <div className="x-con">
        <Routes>
          <Route path="/" element={<DriveHeader />} />
          <Route path="/recent" element={<DriveHeader />} />
          <Route path="/trash" element={<DriveHeader />} />
          <Route path="/shared" element={<DriveHeader />} />
          <Route path="/link" element={<DriveHeader />} />
        </Routes>
      </div>
    </div>
  );
}

export default XDrive;
