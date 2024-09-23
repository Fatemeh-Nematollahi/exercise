import { useState } from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { isLogin } from "../../utils";

function MyNavbar() {
  const [loginStatus, setLoginStatus] = useState(isLogin() ? "خروج" : "ورود");
  const handleLogOut = () => {
    document.cookie =
      "username=admin; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";
    setLoginStatus("ورود");
  };
  const expand = "md";
  return (
    <Navbar
      style={{ backgroundColor: "rgb(186,182,253)" }}
      expand={expand}
      className=" mb-3"
    >
      <Container>
        <Navbar.Brand
          href="#"
          style={{ fontFamily: "Lalezar", fontSize: "25px" }}
        >
          آموزش طراحی سایت
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 ">
              <NavLink to="/" className="nav-link">
                صفحه اصلی
              </NavLink>
              <NavLink to="/about" className="nav-link">
                درباره ما
              </NavLink>
              <NavLink to="/bloge" className="nav-link ">
                مقالات
              </NavLink>
              <NavLink to="/panel" className="nav-link ">
                پنل
              </NavLink>
              {isLogin() ? (
                <NavLink
                  onClick={handleLogOut}
                  to="/login"
                  className="nav-link "
                >
                  {loginStatus}
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link ">
                  {loginStatus}
                </NavLink>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
