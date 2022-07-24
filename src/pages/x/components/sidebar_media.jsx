import React from 'react';
import { BsCamera, BsCamera2, BsCameraVideo, BsCameraVideoFill, BsFileEarmarkPdfFill, BsFilePdf, BsFilePdfFill, BsHeart, BsHeartFill, BsImage, BsImageFill } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom';

const XSidebar = () => {

  let p = useParams()["*"]
  p = p.split("/")

  return (
    <div className='x-sidebar'>
      <div className="x-head-box">
        <span className="x-sb-title">
          Gallery
        </span>
      </div>
      <div className='m-2'></div>
      <div className="x-sb-sub-title">
        Liberary
      </div>
      <div className="x-link-group">
        <Link to="/x/media" className={"x-sb-link " + (p[0] === "" ? "active " : " ")}>
          <BsImageFill className="icon" />
          Images
        </Link>
        <Link to="/x/media/videos" className={"x-sb-link " + (p[0] === "videos" ? "active " : " ")}>
          <BsCameraVideoFill className="icon" />
          Videos
        </Link>
        <Link to="/x/media/docs" className={"x-sb-link " + (p[0] === "docs" ? "active " : " ")}>
          <BsFileEarmarkPdfFill className="icon" />
          Documents
        </Link>
        <Link to="/x/media/fav" className={"x-sb-link " + (p[0] === "fav" ? "active " : " ")}>
          <BsHeartFill className="icon" />
          Favrites
        </Link>
      </div>
    </div>
  );
}

export default XSidebar;
