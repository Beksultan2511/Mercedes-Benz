import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import favourites from '../images/favourite.png'
const MyNav = () => {
  const { authWithGoogle, logout, user } = useContext(authContext);
  return (
    <div>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Link style={{ marginRight: "30px" }} className="mers-logo" to="/">
            <img
              style={{ marginRight: "10px" }}
              width={80}
              src="https://avangardstyle.kg/wp-content/uploads/2019/01/logo-1.svg"
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
                  APARTMENTS
                </Link>
                <Link className="nav-link" to="/add">
                  NEW APARTMENT
                </Link>
              </div>
              <div style={{ display: "flex" }}>
                <Link
                  style={{
                    padding: "15px",
                  }}
                  to="/cart"
                >
                  <img width={30} src={favourites} alt="" />

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
