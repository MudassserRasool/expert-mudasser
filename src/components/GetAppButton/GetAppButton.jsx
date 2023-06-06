import React from "react";
import Style from "./GetAppButton.module.css";
import GetAppIconButton from "..//../assets/GetAppIconForButton.png";

const GetAppButton = () => {
  return (
    <div>
      <div className={Style.GetAppButtonBackground}>
        {/* <span></span> */}
        <img src={GetAppIconButton} alt="" className={Style.GetAppIcon}/>
        <p className={Style.GetAppButtonText}>Get the App</p>
      </div>
    </div>
  );
};

export default GetAppButton;
