import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productContext } from "../context/MyProvider";

const AddPage = () => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const { addCar } = useContext(productContext);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    if(!brand.trim() || !price.trim() || !color.trim() || !image.trim() || !year.trim()){
      alert('Fields required')
      return
    }
    let newCar = {
      brand,
      price,
      color,
      image,
      year,
    };
    addCar(newCar);
    setBrand("");
    setPrice("");
    setColor("");
    setImage("");
    setYear("");
    navigate('/')
  }
  return (
    <div className="main-add">
      <div className="form-add">
        <form onSubmit={handleSubmit}>
          <FormControl
            onChange={(e) => {
              setBrand(e.target.value);
            }}
            placeholder="Enter brand"
          />
          <FormControl
          
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="Enter price"
          />
          <FormControl
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="Enter color"
          />
          <FormControl
            onChange={(e) => {
              setImage(e.target.value);
            }}
            placeholder="Enter url"
          />
          <FormControl
            onChange={(e) => {
              setYear(e.target.value);
            }}
            placeholder="Enter year"
          />
          <Button type="submit" variant="danger">
            ADD PRODUCT
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
