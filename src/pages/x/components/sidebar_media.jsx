import React from 'react';
import { IoMdVideocam, IoIosVideocam, IoMdImage } from 'react-icons/io'
import { BsCamera, BsCamera2, BsCameraVideo, BsCameraVideoFill, BsFileEarmarkPdfFill, BsFilePdf, BsFilePdfFill, BsHeart, BsHeartFill, BsImage, BsImageFill } from 'react-icons/bs'

const XSidebar = () => {
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
        <a href="#" className="x-sb-link">
          <BsImageFill className="icon" />
          Images
        </a>
        <a href="#" className="x-sb-link">
          <BsCameraVideoFill className="icon" />
          Videos
        </a>
        <a href="#" className="x-sb-link">
          <BsFileEarmarkPdfFill className="icon" />
          Documents
        </a>
        <a href="#" className="x-sb-link">
          <BsHeartFill className="icon" />
          Favrites
        </a>
      </div>
    </div>
  );
}

export default XSidebar;
