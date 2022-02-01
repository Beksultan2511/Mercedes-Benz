import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { productContext } from "../context/MyProvider";
import { Link } from "react-router-dom";
import editIcon from "../images/edit.png";
import deleteIcon from '../images/delete.png'



const FlatsCard = () => {
  const [likes, setLikes]= useState(null)
  const { getFlat,products, flats, deleteFlat, currentPosts, getProducts } = useContext(productContext);

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
              <Card key={item.id} style={{ width: "20rem", height: '430px' }}>
                <div style={{ textAlign: "center" }}>
                <img
            width={150}
            src="https://static.tildacdn.com/tild6462-6533-4465-a563-366266363066/pGHuS5071RdmwKZ7Pw5c.png"
            alt=""
          />
                </div>
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Img
                    style={{ objectFit: "contain", height: '200px' }}
                    variant="top"
                    src={item.image}
                  />
                  <Card.Text style={{textAlign: 'left'}}>
                    <span>Address:  {item.address}</span>
                    <p>From:  {item.price} $</p>
                    
                    <img style={{cursor:'pointer'}} onClick={()=> setLikes(likes+1)} width={30} src="https://cdn-icons-png.flaticon.com/512/1182/1182670.png" alt="" />
                    <span>Likes: {likes} </span>
                  </Card.Text>
                  <div style={{ marginTop: "8px" }}>
                    
                    <Link to={`/details/${item.id}`}>
                      <Button variant="primary">Details</Button>
                    </Link>
                    <Link to={`/edit/${item.id}`}>
                      <Button className="btn-edit">
                        <img width={30} src={editIcon} alt="" />
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        deleteFlat(item.id);
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

export default FlatsCard;
