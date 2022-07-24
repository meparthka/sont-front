import React from 'react';
import { ImBin2, ImClock2, ImDrive, ImLink, ImShare2 } from 'react-icons/im'
import { Link, useParams } from 'react-router-dom';

const XSidebar = () => {

  let p = useParams()["*"];
  p = p.split("/")

  console.log(p);

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
        <Link to="/x/drive/" className={"x-sb-link " + (p[0] === "" ? "active " : " ")}>
          <ImDrive className="icon" />
          Drive
        </Link>
        <Link to="/x/drive/recent" className={"x-sb-link " + (p[0] === "recent" ? "active " : " ")}>
          <ImClock2 className="icon" />
          Recents
        </Link>
        <Link to="/x/drive/trash" className={"x-sb-link " + (p[0] === "trash" ? "active " : " ")}>
          <ImBin2 className="icon" />
          Rubbish Bin
        </Link>
      </div>
      <div className="x-sb-sub-title">
        Shared items
      </div>
      <div className="x-link-group">
        <Link to="/x/drive/shared" className={"x-sb-link " + (p[0] === "shared" ? "active " : " ")}>
          <ImShare2 className="icon" />
          Folders
        </Link>
        <Link to="/x/drive/link" className={"x-sb-link " + (p[0] === "link" ? "active " : " ")}>
          <ImLink className="icon" />
          Links
        </Link>
      </div>
    </div>
  );
}

export default XSidebar;
