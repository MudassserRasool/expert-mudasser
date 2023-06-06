import React from 'react'
import Style from './BigOfferSecondText.module.css'
import ReuseableBookNowButton from '../ReuseableBookNowButton/ReuseableBookNowButton'

const BigOfferSecondText = () => {
  return (
    <div>
        <h1 className={Style.bigOfferSecondText}>Big Offers</h1>
        <h2 className={Style.getDiscountText}>Get discount on <br />
many Services Everyday!</h2>
<ReuseableBookNowButton/>
    </div>
  )
}

export default BigOfferSecondText