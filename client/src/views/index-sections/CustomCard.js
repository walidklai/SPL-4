import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardText,
  CardImgOverlay,
  Col,
} from "reactstrap";
import Button from "reactstrap/lib/Button";
import Container from "reactstrap/lib/Container";
import mg from "../../assets/img/lol-cover.jpg";
const CustomCard = () => {
  return (
    <>
      <div
        className="section section-dark"
        style={{
          backgroundImage: "url(" + require("assets/img/lol-cover.jpg") + ")",
          opacity: 0.7,
          zIndex: 1,
        }}
      > 
        <h2 className="presentation-subtitle text-center">
          <strong style={{ fontWeight: 600 }}>SPL TEAMS</strong>
        </h2>

        <hr />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Col
            md="3"
            sm="6"
            className="card white"
            style={{ backgroundColor: "transparent" }}
          >
            <Link to="/team" className="bypass">
              <img
                alt="..."
                className="img-rounded img-responsive blur"
                src={require("assets/img/lol-wallpaper.jpg")}
              />
              <div className="img-details">
                {/* <div className="author">
                 <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/lol-logo.jpg")}
                /> 
              </div> */}
                <h3 className="text-center white" style={{ fontWeight: 600 }}>
                  League of Lengends Team
                </h3>
              </div>
            </Link>
          </Col>

          <Col
            md="3"
            sm="6"
            className="card white"
            style={{ backgroundColor: "transparent" }}
          >
            <Link to="/team" className="bypass">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/cs-go-wallpaper.png")}
              />
              <div className="img-details">
                {/* <div className="author">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/cs-go-logo.jpg")}
                />
              </div> */}
                <h3 className="text-center white" style={{ fontWeight: 600 }}>
                  Counter Strike Team
                </h3>
              </div>
            </Link>
          </Col>
          <Col
            md="3"
            sm="6"
            className="card white"
            style={{ backgroundColor: "transparent" }}
          >
            <Link to="/team" className="bypass">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/valorant-wallpaper.jpg")}
              />
              <div className="img-details">
                {/* <div className="author">
               <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/joe-gardner-2.jpg")}
                /> 
              </div> */}
                <h3 className="text-center white" style={{ fontWeight: 600 }}>
                  Valorant Team
                </h3>
              </div>
            </Link>
          </Col>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
