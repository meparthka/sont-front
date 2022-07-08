import React from 'react';
import XLogo from '../../assets/logo.svg'
import { BsFillFolderFill, BsImages, BsChatFill } from "react-icons/bs"
import { Link } from 'react-router-dom';

const XHome = () => {
  return (
    <div>
      <div className="x-navbar">
        <div className="x-nav-logo">
          <img src={XLogo} alt="" srcset="" />
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
      <div className="x-con">
        <h1>Hello, World!</h1>
      </div>
    </div>
  );
}

export default XHome;
