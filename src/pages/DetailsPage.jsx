import React, { useContext, useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ModalOrder from "../components/ModalOrder";
import { productContext } from "../context/MyProvider";

const DetailsPage = () => {
  const [comments, setComments] = useState([]);
  const [addC, setAddC] = useState([]);
  const [end, setEnd] = useState(null);
  const params = useParams();
  const { detailsFlat, details, addAndDelete, checkProductInCart } =
    useContext(productContext);
  useEffect(() => {
    detailsFlat(params.id);
  }, []);

  if (!details) {
    return <h2>Loading...</h2>;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let comm = {
      comment: comments,
    };
    localStorage.setItem("comments", JSON.stringify(comm));
    let newComm = JSON.parse(localStorage.getItem("comments"));
    addC.push(newComm);
    addC.filter((item) => {
      setEnd(item.comment);
    });
    setComments('')
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div style={{ marginLeft: "50px" }}>
        <img className="img-details" src={details.image} alt="" />
        <div
          style={{
            width: "70%",
            height: "200px",
            background: "rgba(0, 0, 0, 0.568)",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          <h4 style={{ color: "white" }}>Comments:</h4>
          <div
            style={{
              width: "95%",
              background: "white",
              height: "50%",
              marginLeft: "2%",
              borderRadius: "25px",
            }}
          >
            {" "}
            <p style={{ textAlign: "left", padding: "5px" }}>
              User: {end}
            </p>{" "}
          </div>
          <form
            onSubmit={handleSubmit}
            style={{ textAlign: "center", display: "flex", marginTop: "10px" }}
          >
            <FormControl
            value={comments}
              onChange={(e) => {
                setComments(e.target.value);
              }}
              placeholder="Enter your comments..."
            />
            <Button type="submit">SEND</Button>
          </form>
        </div>
      </div>
      <div className="details-info">
        <p>
          {" "}
          Address: <strong>{details.address}</strong>{" "}
        </p>
        <p>
          {" "}
          Price: <strong>{details.price} $</strong>{" "}
        </p>
        <p>
          {" "}
          Area: <strong>{details.area} m3</strong>{" "}
        </p>
        <p>
          {" "}
          Rooms: <strong>{details.rooms}</strong>{" "}
        </p>
        {checkProductInCart(details.id) ? (
          <Button
            style={{ marginBottom: "10px" }}
            variant="success"
            onClick={() => addAndDelete(details)}
          >
            ALREADY IN FAVOURITES
          </Button>
        ) : (
          <Button
            style={{ marginBottom: "10px" }}
            variant="dark"
            onClick={() => addAndDelete(details)}
          >
            ADD TO FAVOURITES
          </Button>
        )}
        <ModalOrder />
      </div>
    </div>
  );
};

export default DetailsPage;
