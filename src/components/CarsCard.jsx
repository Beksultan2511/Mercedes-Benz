import React, { useContext, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { productContext } from "../context/MyProvider";
import { Link, useNavigate } from "react-router-dom";
import editIcon from "../images/edit.png";
import deleteIcon from '../images/delete.png'
const CarsCard = () => {
  const { getCar,products, cars, deleteCar, currentPosts, getProducts } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);


  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Container>
        <Row>
          {currentPosts.map((item) => (
            <Col style={{ marginBottom: "25px" }} md={4} sm={6} xs={12}>
              <Card key={item.id} style={{ width: "18rem" }}>
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title style={{ color: "gray" }}>
                    {item.brand}
                  </Card.Title>
                  <Card.Text>
                    <p>From: {item.price} $</p>
                  </Card.Text>
                  <Card.Img
                    style={{ objectFit: "contain" }}
                    variant="top"
                    src={item.image}
                  />
                  <div style={{ marginTop: "8px" }}>
                    <Link to={`/details/${item.id}`}>
                      <Button variant="dark">Details</Button>
                    </Link>
                    <Link to={`/edit/${item.id}`}>
                      <Button className="btn-edit">
                        <img width={30} src={editIcon} alt="" />
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        deleteCar(item.id);
                      }}
                      className="btn-delete"
                    >
                      <img
                        width={30}
                        src={deleteIcon}
                        alt=""
                      />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CarsCard;
