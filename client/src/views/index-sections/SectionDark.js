/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import Iframe from "react-iframe";

import vid from "../../assets/img/spl.mp4";

// core components

function SectionDark() {
  return (
    <>
      {/* <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/leona.png") + ")",
            zIndex:-2,
            opacity:0.1
          }}
        /> */}
      {/* <div
          className=""
          style={{
            backgroundImage: "url(" + require("assets/img/leona2.png") + ")",
            zIndex:-2,
            opacity:0.1
          }}
        /> */}

      <div
        className="section section-dark"
        style={{ overflow: "hidden", padding: 0 }}
      >
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/wind.png") + ")",
            opacity: 0.4,
          }}
        />
        <video
          className="zoom"
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50% -50%)",
            opacity: 0.2,
          }}
        >
          <source src={vid} type="video/mp4" />
        </video>
        <h2 className="presentation-subtitle text-center">
          <strong style={{ fontWeight: 600 }}>LATEST STREAMS</strong>
        </h2>

        <hr />
        <br />

        <Container>
          <div className="card">
            <Iframe
              url="https://www.youtube.com/embed/sNewigLaYNw"
              width="100%"
              height="450px"
              id="myId"
              className="radius"
              display="initial"
              position="relative"
            />
          </div>

          <div className="card">
            <Iframe
              url="https://www.youtube.com/embed/sNewigLaYNw"
              width="100%"
              height="450px"
              id="myId"
              className="radius"
              display="initial"
              position="relative"
            />
          </div>
          <div className="card">
            <Iframe
              url="https://www.youtube.com/embed/sNewigLaYNw"
              width="100%"
              height="450px"
              id="myId"
              className="radius"
              display="initial"
              position="relative"
            />
          </div>
          {/* <div>
            <Card
              style={{
                backgroundColor: "transparent",
                border: "1px solid  rgb(92, 209, 255)",
                overflow: "hidden",
              }}
            >
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card
              style={{
                backgroundColor: "transparent",
                border: "1px solid  rgb(92, 209, 255)",
                overflow: "hidden",
              }}
            >
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card
              style={{
                backgroundColor: "transparent",
                border: "1px solid  rgb(92, 209, 255)",
                overflow: "hidden",
              }}
            >
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card
              style={{
                backgroundColor: "transparent",
                border: "1px solid  rgb(92, 209, 255)",
                overflow: "hidden",
              }}
            >
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card
              style={{
                backgroundColor: "transparent",
                border: "1px solid  rgb(92, 209, 255)",
                overflow: "hidden",
              }}
            >
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div> */}

          {/* <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
          
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
            <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
            </Col>
          </Row> */}
        </Container>
        {/* <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/wind.png") + ")",
            opacity:0.4
          }}
        /> */}
        <hr />
      </div>
    </>
  );
}

export default SectionDark;
