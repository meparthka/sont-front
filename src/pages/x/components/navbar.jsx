import React from 'react';
import XLogo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { IoIosFolder } from 'react-icons/io'
import { ImUsers, ImBubbles2, ImImages } from 'react-icons/im'

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
              <IoIosFolder />
            </Link>
            <Link to="/x" className="x-n-link">
              <ImImages />
            </Link>
          </div>
          <div className="x-n-links-group">
            <Link to="/x" className="x-n-link">
              <ImBubbles2 />
            </Link>
          </div>
          <div className="x-n-links-group">
            <Link to="/x" className="x-n-link">
              <ImUsers className='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default XNavbar;
