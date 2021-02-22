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
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div className="section section-dark text-center" style={{}}>
      <div
          className='fixed-clouds'
          style={{
            backgroundImage: "url(" + require("assets/img/leona2.png") + ")",
          }}
        />
        <Container className="text-center">
          {/* <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Do you like what you see?</h2>
              <p className="description">
                Cause if you do, it can be yours for Free. Hit the button below
                and download it. Start a new project or give an old Bootstrap 4
                project a new look.
              </p>
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
              <Button
                className="btn-round"
                color="danger"
                href="http://www.creative-tim.com/product/paper-kit-react?ref=pkr-index-page"
                target="_blank"
              >
                Download free React
              </Button>
            </Col>
          </Row> */}
          {/* <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Want more?</h2>
              <p className="description">
                We're going to launch{" "}
                <a className="text-danger" href="#pablo" disabled>
                  Paper Kit PRO React in a few weeks
                </a>
                . It will have a huge number of components, sections and example
                pages.
              </p>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
              <Button className="btn-round" color="info" href="#pablo" disabled>
                <i aria-hidden={true} className="nc-icon nc-spaceship" />{" "}
                Upgrade to PRO
              </Button>
            </Col>
          </Row> */}
          <Row className="justify-content-md-center text-center">
            <Col
              className="text-center"
              lg="8"
              md="12"
              style={{ marginBottom: "2rem" }}
            >
              <h3 className='white'>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="twitter-sharrre btn-round"
                color="danger"
                href="#pablo"
                id="tooltip3373767"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-youtube" /> Youtube
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip3373767">
                Share!
              </UncontrolledTooltip>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color='none'
                href="#pablo"
                id="tooltip840791273"
                onClick={(e) => e.preventDefault()}
                style={{backgroundColor:'#484215',border:'none'}}
              >
                <i className="fa fa-twitch" /> Twitch
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip840791273">
                Share!
              </UncontrolledTooltip>
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="#pablo"
                id="tooltip68961360"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" /> Facebook
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip68961360">
                Share!
              </UncontrolledTooltip>
              <Button
                className="sharrre btn-round ml-2"
                color="dribbble-bg"
                href="https://github.com/creativetimofficial/paper-kit-react?ref=creativetim"
                target="_blank"
                id="tooltip864353654"
              >
                <i className="fa fa-instagram"/> Instagram
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip864353654">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
          <br/>
        <Form className='section section-dark text-center white' style={{border:'1px solid white',borderRadius:'12px'}}>
         
          <h3>CONTACT US</h3>
          <br/>
          <div>
          <center>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10} className='col-md-4'>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </Col></center>
          
          <center>
            <Label for="examplePassword" sm={2}>
              Password
            </Label>
            <Col sm={10}  className='col-md-4 add-border'>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </Col>
            </center>
         
         
          <center>
            <Label for="exampleText" sm={2}>
              Text Area
            </Label>
            <Col sm={10}  className='col-md-4'>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
            </center>
          </div>
          <br/>
          <Button color='info' className='btn-round col-md-2'>SEND</Button>
        </Form>
        </Container>
        
      </div>
      
    </>
  );
}

export default SectionDownload;
