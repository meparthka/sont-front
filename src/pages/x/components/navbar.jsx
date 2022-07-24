import React from 'react';
import XLogo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { IoIosFolder } from 'react-icons/io'
import { ImUsers, ImBubbles2, ImImages } from 'react-icons/im'
import { useParams } from "react-router-dom"

const XNavbar = () => {

  let p = useParams()["*"];
  p = p.split("/");

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
          <div className={"x-n-links-group " + ((p[0] === "drive" || p[0] === "media") ? "active " : " ")}>
            <Link to="/x/drive" className={"x-n-link " + (p[0] === "drive"? "active" : "")}>
              <IoIosFolder />
            </Link>
            <Link to="/x/media" className={"x-n-link " + (p[0] === "media"? "active " : " ") + ((p[0] !== "drive" && p[0] !== "media") ? "d-none " : " ")}>
              <ImImages />
            </Link>
          </div>
          <div className={"x-n-links-group " + (p[0] === "message" ? "active " : " ")}>
            <Link to="/x/message" className={"x-n-link " + (p[0] === "message" ? "active " : " ")}>
              <ImBubbles2 />
            </Link>
          </div>
          <div className={"x-n-links-group " + (p[0] === "users" ? "active " : " ")}>
            <Link to="/x/users" className={"x-n-link " + (p[0] === "users" ? "active " : " ")}>
              <ImUsers className='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default XNavbar;
