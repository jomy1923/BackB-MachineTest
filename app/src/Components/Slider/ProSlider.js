import React, { Fragment } from 'react'
import './ProSlider.css'
export default function Slider() {
    return (
       <Fragment>
           <div className="slider">
           <div className="slider-img">
               <img src="/Images/IMG_20210517_202847.jpg" alt="" />
           </div>
           <div className="slider-img">
               <img src="/Images/IMG_20210517_202913.jpg" alt="" />
           </div>
           <div className="slider-img">
               <img src="/Images/IMG_20210517_202945.jpg" alt="" />
           </div>
           </div>
       </Fragment>
    )
}
