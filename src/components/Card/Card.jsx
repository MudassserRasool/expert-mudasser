import React from "react";
import Style from "./Card.module.css";
import SimpleStar from "..//../assets/SimpleStar.png";
import YellowStar from "..//../assets/YellowStar.png";

const Card = () => {
  return (
    <div>
      {/* Start Card Image */}
      <div className={Style.imageBox}>
        <div className={Style.starBox}>
          <img
            src={SimpleStar}
            alt="Rating Not Loading"
            className={Style.starIcon}
          />
        </div>
      </div>
      {/* End Card Image */}

      {/* Start Card Text */}
      <p className={Style.cardTitel}>Home Cleaning</p>
      <p className={Style.cardItemCategory}>Including Kitchen</p>
      <p className={Style.cardItemPrice}>
        50$ <span className={Style.cardItemDiscount}>15% OFF</span>
      </p>
      {/* Start Card Text */}
    </div>
  );
};

export default Card;
