import React, { useContext, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productContext } from "../context/MyProvider";

const EditForm = ({ toEdit }) => {
  
  const [rooms, setRooms] = useState(toEdit.rooms);
  const [price, setPrice] = useState(toEdit.price);
  const [address, setAddress] = useState(toEdit.address);
  const [image, setImage] = useState(toEdit.image);
  const [area, setArea] = useState(toEdit.area);
  const {saveEdited} = useContext(productContext)
    const navigate = useNavigate()

  function handleSubmit(e){
      e.preventDefault()
      let edited = {
          ...toEdit,
          rooms,
          price,
          address,
          image,
          area,
      }
      saveEdited(edited)
      navigate('/')

  }
  return (
    <div className="div-save">
      <div className="form-save">
        <form onSubmit={handleSubmit}>
          <FormControl
            onChange={(e) => setRooms(e.target.value)}
            value={rooms}
          />
          <FormControl onChange={(e) => setPrice(e.target.value)} value={price} />
          <FormControl onChange={(e) => setAddress(e.target.value)} value={address  } />
          <FormControl onChange={(e) => setImage(e.target.value)} value={image} />
          <FormControl onChange={(e) => setArea(e.target.value)} value={area} />
          <Button type="submit" variant="primary">Save</Button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
