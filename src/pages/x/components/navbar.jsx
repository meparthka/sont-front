import React from 'react';
import XLogo from '../../../assets/logo.svg'
import { BsFillFolderFill, BsImages, BsChatFill } from "react-icons/bs"
import { Link } from 'react-router-dom';

const XNavbar = () => {
  return (
    <div>
      <div className="x-navbar">
        <div className="x-head-box">
          <div className="x-nav-logo">
            <img src={XLogo} alt="" srcset="" />
          </div>
        </div>
        <div className="x-nav-links">
          {/* <BiFolder /> */}
          <div className="x-n-links-group active">
            <Link to="/x" className="x-n-link active">
              <BsFillFolderFill />
            </Link>
            <Link to="/x" className="x-n-link">
              <BsImages />
            </Link>
          </div>
          <div className="x-n-links-group">
            <Link to="/x" className="x-n-link">
              <BsChatFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default XNavbar;
