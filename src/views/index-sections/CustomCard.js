import React from "react";
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
        }}
      >
        <h2 className="presentation-subtitle text-center">
          <strong style={{fontWeight:600}}>SPL TEAMS</strong>
        </h2>

        <hr />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {/* <Card
            style={{
              width: "15rem",
              height: "20rem",
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"auto"
            }}
          >
            <CardImg src={mg} alt="..."/>
            <CardImgOverlay>
            <CardBody>
              <CardText style={{ color: "white"}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content
              </CardText>
            </CardBody>
            <center><Button>A</Button></center>
            </CardImgOverlay>
          </Card>
          <Card
            style={{
              width: "15rem",
              height: "20rem",
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}
          >
            <CardImg top src="..." alt="..." />
            <CardBody>
              <CardText style={{ color: "white" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "15rem",
              height: "20rem",
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}
          >
            <CardImg top src="..." alt="..." />
            <CardBody>
              <CardText style={{ color: "white" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "15rem",
              height: "20rem",
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}
          >
            <CardImg top src="..." alt="..." />
            <CardBody>
              <CardText style={{ color: "white" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "15rem",
              height: "20rem",
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}
          >
            <CardImg top src="..." alt="..." />
            <CardBody>
              <CardText style={{ color: "white" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content
              </CardText>
            </CardBody>
          </Card> */}
          <Col
            md="3"
            sm="6"
            className="card white"
            style={{ backgroundColor: "transparent" }}
          >
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
              <h3 className='text-center'>Valorant Team</h3>
            </div>
          </Col>
          <Col
            md="3"
            sm="6"
            className="card white"
            style={{ backgroundColor: "transparent" }}
          >
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
              <h3 className='text-center'>Valorant Team</h3>
            </div>
          </Col>
          <Col
            md="3"
            sm="6"
            className="card white"
            style={{ backgroundColor: "transparent" }}
          >
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
              <h3 className='text-center'>Valorant Team</h3>
            </div>
          </Col>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
