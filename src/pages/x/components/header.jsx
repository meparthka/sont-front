import React from "react";
import { MdSearch } from "react-icons/md"
import InputBox from "../../../components/inputbox"

const DriveHeader = () => {
  return (
    <div className="header">
      <div className="x-head-box x-header">
        
        <div className="x-header-search">
          <InputBox icon={<MdSearch />} name="query"  place="Search" />
        </div>

        <div>
          Hello, World!
        </div>
      </div>
      asdasdasdasd
    </div>
  )
}

export default DriveHeader
