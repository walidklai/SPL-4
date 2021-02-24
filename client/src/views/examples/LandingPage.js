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
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import { Link } from "react-router-dom";

import lolTitle from "../../assets/img/lol-title.png";
import lolRune from "../../assets/img/lol-rune.png";

function LandingPage() {
  return (
    <>
      <div className="main">
        <div
          className="section section-dark text-center"
          style={{ overflow: "hidden" }}
        >
          <div
            style={{
              backgroundImage:
                "url(" + require("assets/img/lol-wallpaper.jpg") + ")",
              width: "100%",
              filter: "blur(4px)",
              height: "80%",
              position: "absolute",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              zIndex: -2,
            }}
          />
          <div
            className="moving-clouds"
            style={{
              backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
              zIndex: -1,
            }}
          />
          <Container>
            <img
              src={lolTitle}
              style={{ width: "300px", opacity: 0.7 }}
              className="logo"
            />
            <hr />
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              {Array(5)
                .fill()
                .map((el) => (
                  <Col md="2">
                    <Card className="card-profile card-plain">
                      <div
                        className="img-responsive card"
                        style={{ border: "1px solid #51bcda"}}
                      >
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                          />
                        </a>
                      </div>
                      <img
              src={lolRune}
              style={{ width: "300px", opacity: 0.7}}
              className="logo"
            />
                    </Card>
                  </Col>
                ))}
            </Row>
            <hr />
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              {Array(5)
                .fill()
                .map((el) => (
                  <Col md="2">
                    <Card className="card-profile card-plain">
                      <div
                        className="img-responsive card"
                        style={{ border: "1px solid #51bcda" }}
                      >
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                          />
                        </a>
                      </div>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
          <Link to="/index">
            <Button color="info" className="btn-round">
              ← Go back
            </Button>
          </Link>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
