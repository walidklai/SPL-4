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
import axios from "axios";
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
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

function SectionLogin() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      const res = await axios.get(`/api/newsletter?email=${email}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/valorin.jpg") + ")",
          overflow: "hidden",
        }}
      >
        <div
          className="reversed-moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/snow.png") + ")",
            opacity: 0.05,
          }}
        />
        <Container>
          <Row>
            <Col className="mx-auto buzz" lg="4" md="6">
              <Card
                className="card-register"
                color="transparent"
                style={{ border: "1px solid white" }}
              >
                <h3 className="title mx-auto">Newsletter</h3>
                {/*  <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mt-0"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div> */}
                <Form className="register-form">
                  <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  {/* <label>Password</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" />
                  </InputGroup> */}
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    type="button"
                    onClick={(e) => handleSubmit(e)}
                  >
                    SEND
                  </Button>
                </Form>
                {/* <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div> */}
              </Card>
              {/* <div className="col text-center">
                <Button
                  className="btn-round"
                  outline
                  color="neutral"
                  href="/register-page"
                  size="lg"
                  target="_blank"
                >
                  View Register Page
                </Button>
              </div> */}
              <p className="text-center white">Don't miss the latest news !</p>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
