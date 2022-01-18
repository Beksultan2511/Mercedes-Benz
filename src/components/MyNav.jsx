import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import Badge from "react-bootstrap/Badge";
import { productContext } from "../context/MyProvider";
import cartIcon from "../images/shopping-cart.png";
const MyNav = () => {
  const { authWithGoogle, logout, user } = useContext(authContext);
  const { productsCount } = useContext(productContext);
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Link style={{ marginRight: "30px" }} className="mers-logo" to="/">
            <img
              style={{ marginRight: "10px" }}
              width={60}
              src="https://i.pinimg.com/originals/f1/ca/73/f1ca73e3396a53f45753dfd3a698445c.png"
              alt=""
            />
            <img
              width={100}
              src="https://cars.mercedes-benz.ru/Content/images/logo2.svg"
              alt=""
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
              className="me-auto"
            >
              <div style={{ display: "flex" }}>
                <Link className="nav-link" to="/">
                  ASSORTMENT
                </Link>
                <Link className="nav-link" to="/add">
                  ADD A NEW CAR
                </Link>
              </div>
              <div style={{ display: "flex" }}>
                <Link
                  style={{
                    padding: "15px",
                  }}
                  to="/cart"
                >
                  <Badge bg="danger">{productsCount}</Badge>
                  <img width={30} src={cartIcon} alt="" />
                </Link>
                {user ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "150px",
                    }}
                  >
                    <button
                      className="nav-link"
                      style={{ background: "transparent", border: "none" }}
                      onClick={logout}
                    >
                      LOG OUT
                    </button>
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "50px",
                        cursor: "pointer",
                      }}
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                ) : (
                  <button
                    className="nav-link"
                    style={{ background: "transparent", border: "none" }}
                    onClick={authWithGoogle}
                  >
                    SIGN IN
                  </button>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
