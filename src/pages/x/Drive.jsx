import React from 'react';
import DriveHeader from './components/header';
import XSidebarDrive from './components/sidebar_drive';

const XDrive = () => {
  return (
    <div>
      <XSidebarDrive />
      <div className="x-con">
        <DriveHeader />
      </div>
    </div>
  );
}

export default XDrive;
