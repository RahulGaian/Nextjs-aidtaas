import React from 'react'
import style from "./index.module.css"
const MarketPlaceDesc = ({appDescription}) => {
  return (
    <div className={style.container}>
            <div className={style.app_description}>
               {appDescription}
            </div>
    </div>
  )
}

export default MarketPlaceDesc;