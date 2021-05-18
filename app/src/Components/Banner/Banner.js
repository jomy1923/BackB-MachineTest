import React, { Fragment } from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <Fragment>
     <div className='banner banner-mask'>
       <div className='banner-letter'>
         <h2>GET THE NEW IPHONE 12 PRO</h2>
          <h6>A transformative triple‑camera system that   adds tons of capability without complexity </h6>
          <button>Buy Now <i className="fas fa-shopping-bag"></i></button>
       </div>
       <div className='banner-img'>
         <img src="/Images/iphone_12_PNG22@1X.png" alt="" />
       </div>

     </div>
    </Fragment>
  );
}
