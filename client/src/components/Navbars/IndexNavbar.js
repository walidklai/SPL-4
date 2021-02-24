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
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  InputGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container className="nav-margin">
        <div className="navbar-translate fun">
          <Link to="/">
            <NavbarBrand
              className="flash hover-color"
              data-placement="bottom"
              href="/"
              title="Coded by Creative Tim"
            >
              GALACTECH
            </NavbarBrand>
          </Link>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>

        <NavItem>
          <Button className="btn-round highlight" color="info" href="#news">
            News !
          </Button>
        </NavItem>
        <Collapse
          className="justify-content-end collapsed-bar"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                className="highlight hover-color"
                href="#teams"
              >
                Teams
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="highlight hover-color"
                href="#partners"
              >
                Partners
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="highlight hover-color"
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-index-navbar"
                target="_blank"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="highlight hover-color"
                href="#latest"
              >
                Latest
              </NavLink>
            </NavItem>
            <Nav navbar>
              <NavItem>
                <NavLink
                  className="hover-color"
                  data-placement="bottom"
                  href="https://www.youtube.com/channel/UC3k-p3pNybCh4yOGxLbTnlQ"
                  target="_blank"
                  title="Subscribe to our channel"
                >
                  <i className="fa fa-youtube" />
                  <p className="d-lg-none">Youtube</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="hover-color"
                  data-placement="bottom"
                  href="https://www.facebook.com/SPLGaming/"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <i className="fa fa-facebook-square" />
                  <p className="d-lg-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="hover-color"
                  data-placement="bottom"
                  href="https://www.instagram.com/splgaming/?hl=fr"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <i className="fa fa-instagram" />
                  <p className="d-lg-none">Instagram</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="hover-color"
                  data-placement="bottom"
                  href="https://www.twitch.tv/splgamingtv"
                  target="_blank"
                  title="Follow on Twitch"
                >
                  <i className="fa fa-twitch" />
                  <p className="d-lg-none">Twitch</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
