import React from 'react'
import Style from './DiscountAnnoucement.module.css'
import ReuseableBookNowButton from '../ReuseableBookNowButton/ReuseableBookNowButton'

const DiscountAnnoucement = () => {
  return (
    <div>
        <h1 className={Style.discountAnnoucementText}>UPTO <br />50% OFF</h1>
        <ReuseableBookNowButton/>
    </div>
  )
}

export default DiscountAnnoucement