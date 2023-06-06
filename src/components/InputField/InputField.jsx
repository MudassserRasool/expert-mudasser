import React from "react";
import Style from "./InputField.module.css";
// import { FaMicrophoneLines } from "react-icons/fa";
// import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";
const InputField = () => {
  return (
    <div>
      <div className={Style.CompleteInputField}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Here..."
          className={Style.inputField}
        />
        <span className={Style.VoiceSearchIconBg}>
          <FaMicrophoneAlt
            className={Style.VoiceSearchIcon}
            color="#FFFFFF"
            size={16.48}
          />
        </span>
      </div>
    </div>
  );
};

export default InputField;
