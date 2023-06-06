import React from 'react'
import Style from './SearchHeading.module.css'

const SearchHeading = () => {
  return (
    <div>
        
        <p className={Style.SearchHeading}>Find the <span className={Style.SearchHeadingInnerText}>Service You Need</span> Today!</p>
    </div>
  )
}

export default SearchHeading