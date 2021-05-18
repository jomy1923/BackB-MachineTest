import React, { Fragment } from "react";
import { Link,useHistory } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const history= useHistory()
  return (
    <Fragment>
      <nav>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Logo
          </Link>

          <form className="nav-form" action="#">
            <div className="search">
              <i className="fa fa-search"></i>
              <input placeholder="search" />
            </div>
          </form>

          <ul className="icons">
            <li className="nav-item">
              <i className="far fa-heart"></i>
              <span className="badge">0</span>
            </li>
            <li className="nav-item">
              <i className="far fa-user" onClick={()=>{history.push('/Login')}}></i>
            </li>
            <li className="nav-item">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge1">0</span>
            </li>
          </ul>
        </div>

        <div className="small-products">
          <div className="blue">
            <div className="circle">
              <img src="/Images/iphone-12-pro-max.png" alt="" />
              <span>Mobile & Tablets</span>
            </div>
          </div>
          <div className="blue">
            <div>
            <img src="/Images/iphone-12-pro-max.png" alt="" />
              <span>Home & Kitchen</span>
            </div>
          </div>
          <div className="blue">
            <div>
            <img src="/Images/PngItem_5921145@1X.webp" alt="" />
              <span>Beauty, Toys & More</span>
            </div>
          </div>
          <div className="blue">
            <div>
            <img src="/Images/iphone-12-pro-max.png" alt="" />
              <span>Mobile & Tablets</span>
            </div>
          </div>
          <div className="blue">
            <div>
            <img src="/Images/iphone-12-pro-max.png" alt="" />
              <span>Home & Kitchen</span>
            </div>
          </div>
          <div className="blue">
            <div>
            <img src="/Images/PngItem_5921145@1X.webp" alt="" />
              <span>Beauty, Toys & More</span>
            </div>
          </div>
          <div className="blue">
            <div>
            <img src="/Images/iphone-12-pro-max.png" alt="" />
              <span>Mobile & Tablets</span>
            </div>
          </div>
          <div className="blue">
            <div>
            <img src="/Images/iphone-12-pro-max.png" alt="" />
              <span>Home & Kitchen</span>
            </div>
          </div>
          <div className="blue">
            <div>
            <img src="/Images/PngItem_5921145@1X.webp" alt="" />
              <span>Beauty, Toys & More</span>
            </div>
          </div>
          <div className="blue">
            <div>
            <img src="/Images/iphone-12-pro-max.png" alt="" />
              <span>Mobile & Tablets</span>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
