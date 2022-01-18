import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../context/MyProvider";

const DetailsPage = () => {
  const params = useParams();
  const { detailsCar, details , addAndDelete, checkProductInCart} = useContext(productContext);
  useEffect(() => {
    detailsCar(params.id);
  }, []);
  console.log(details);
  if (!details) {
    return <h2>Loading...</h2>;
  }
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <div style={{marginTop: '50px', marginLeft: '50px'}}>
        <img className="img-details" src={details.image} alt="" />
      </div>
      <div className="details-info">
        <p>
          {" "}
          Brand: <strong>{details.brand}</strong>{" "}
        </p>
        <p>
          {" "}
          Price: <strong>{details.price}$</strong>{" "}
        </p>
        <p>
          {" "}
          Color: <strong>{details.color}</strong>{" "}
        </p>
        <p>
          {" "}
          Year: <strong>{details.year}</strong>{" "}
        </p>
        {checkProductInCart(details.id)?(
          <Button variant='danger' onClick={()=> addAndDelete(details)}>ALREADY IN CART</Button>
        ):(
          <Button variant='dark' onClick={()=> addAndDelete(details)}>ADD TO CART</Button>
        )}
        
        
      </div>
    </div>
  );
};

export default DetailsPage;
