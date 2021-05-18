import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./Products.css";

export default function products() {
  return (
    <Fragment>
      <div className="products">
        <Card className="card">
          <Card.Header className="pro-header">
            Popular Products
            <h5>View More</h5>
          </Card.Header>
          <Card.Body className="pro-body">
            <Card className="pro-single">
              <img src="/Images/playstation-5.png" alt="" />
              <p className="p1">sony</p>
              <h6>Playstation 5 Bundle</h6>
              <h4>QAR</h4> <h4 className="pro-rate">1,500.00</h4>
              <p className="p2">QAR 2,000.00</p>
            </Card>
            <Card className="pro-single">
              <img src="/Images/playstation-5.png" alt="" />
              <p className="p1">sony</p>
              <h6>Playstation 5 Bundle</h6>
              <h4>QAR</h4> <h4 className="pro-rate">1,500.00</h4>
              <p className="p2">QAR 2,000.00</p>
            </Card>
            <Card className="pro-single">
              <img src="/Images/playstation-5.png" alt="" />
              <p className="p1">sony</p>
              <h6>Playstation 5 Bundle</h6>
              <h4>QAR</h4> <h4 className="pro-rate">1,500.00</h4>
              <p className="p2">QAR 2,000.00</p>
            </Card>
            <Card className="pro-single">
              <img src="/Images/playstation-5.png" alt="" />
              <p className="p1">sony</p>
              <h6>Playstation 5 Bundle</h6>
              <h4>QAR</h4> <h4 className="pro-rate">1,500.00</h4>
              <p className="p2">QAR 2,000.00</p>
            </Card>
            <Card className="pro-single">
              <img src="/Images/playstation-5.png" alt="" />
              <p className="p1">sony</p>
              <h6>Playstation 5 Bundle</h6>
              <h4>QAR</h4> <h4 className="pro-rate">1,500.00</h4>
              <p className="p2">QAR 2,000.00</p>
            </Card>
          </Card.Body>
        </Card>
        <div></div>
      </div>
    </Fragment>
  );
}
