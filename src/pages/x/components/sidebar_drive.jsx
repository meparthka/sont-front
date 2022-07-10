import React from 'react';
import { ImBin, ImBin2, ImClock2, ImDrive, ImLink, ImShare, ImShare2 } from 'react-icons/im'

const XSidebar = () => {
  return (
    <div className='x-sidebar'>
      <div className="x-head-box">
        <span className="x-sb-title">
          My Files
        </span>
      </div>
      <div className='m-2'></div>
      <div className="x-sb-sub-title">
        File Manager
      </div>
      <div className="x-link-group">
        <a href="#" className="x-sb-link active">
          <ImDrive className="icon" />
          Drive
        </a>
        <a href="#" className="x-sb-link">
          <ImClock2 className="icon" />
          Recents
        </a>
        <a href="#" className="x-sb-link">
          <ImBin2 className="icon" />
          Rubbish Bin
        </a>
      </div>
      <div className="x-sb-sub-title">
        Shared items
      </div>
      <div className="x-link-group">
        <a href="#" className="x-sb-link">
          <ImShare2 className="icon" />
          Folders
        </a>
        <a href="#" className="x-sb-link">
          <ImLink className="icon" />
          Links
        </a>
      </div>
    </div>
  );
}

export default XSidebar;
