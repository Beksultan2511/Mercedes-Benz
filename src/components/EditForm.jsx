import React, { useContext, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productContext } from "../context/MyProvider";

const EditForm = ({ toEdit }) => {
  const [brand, setBrand] = useState(toEdit.brand);
  const [price, setPrice] = useState(toEdit.price);
  const [color, setColor] = useState(toEdit.color);
  const [image, setImage] = useState(toEdit.image);
  const [year, setYear] = useState(toEdit.year);
  const {saveEdited} = useContext(productContext)
    const navigate = useNavigate()

  function handleSubmit(e){
      e.preventDefault()
      let edited = {
          ...toEdit,
          brand,
          price,
          color,
          image,
          year,
      }
      saveEdited(edited)
      navigate('/')

  }
  return (
    <div className="div-save">
      <div className="form-save">
        <form onSubmit={handleSubmit}>
          <FormControl
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
          />
          <FormControl onChange={(e) => setPrice(e.target.value)} value={price} />
          <FormControl onChange={(e) => setColor(e.target.value)} value={color} />
          <FormControl onChange={(e) => setImage(e.target.value)} value={image} />
          <FormControl onChange={(e) => setYear(e.target.value)} value={year} />
          <Button type="submit" variant="dark">Save</Button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
