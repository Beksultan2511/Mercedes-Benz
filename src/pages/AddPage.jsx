import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productContext } from "../context/MyProvider";

const AddPage = () => {
  const [rooms, setRooms] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [area, setArea] = useState("");
  const { addFlat } = useContext(productContext);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    if(!rooms.trim() || !price.trim() || !address.trim() || !image.trim() || !area.trim()){
      alert('Fields required')
      return
    }
    let newFlat = {
      rooms,
      price,
      address,
      image,
      area,
    };
    addFlat(newFlat);
    setRooms("");
    setPrice("");
    setAddress("");
    setImage("");
    setArea("");
    navigate('/')
  }
  return (
    <div className="main-add">
      <div className="form-add">
        <form onSubmit={handleSubmit}>
          <FormControl
            onChange={(e) => {
              setRooms(e.target.value);
            }}
            placeholder="Specify the number of rooms"
          />
          <FormControl
          
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="Specify the price of the apartment"
          />
          <FormControl
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="Specify the address of the apartment"
          />
          <FormControl
            onChange={(e) => {
              setImage(e.target.value);
            }}
            placeholder="Insert a picture of the apartment"
          />
          <FormControl
            onChange={(e) => {
              setArea(e.target.value);
            }}
            placeholder="Specify the area of the apartment"
          />
          <Button type="submit" variant="success">
            ADD A NEW FLAT
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
