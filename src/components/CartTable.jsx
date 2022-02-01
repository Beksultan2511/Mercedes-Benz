import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productContext } from "../context/MyProvider";
import deleteIcon from "../images/delete.png";

const CartTable = ({ cart }) => {
  const { deleteProductInCart } = useContext(productContext);

  return (
    <div>
      <Table style={{ background: "white" }} striped bordered hover>
        <thead>
          <tr>
            <th>Address</th>
            <th>Rooms count</th>
            <th>Area</th>
            <th>Image</th>
            <th>Price</th>
            <td>#</td>
          </tr>
        </thead>
        <tbody>
          {cart.products.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.address}</td>
              <td>{item.product.rooms}</td>
              <td>{item.product.area} m3</td>
              <td>
                <Link to={`/details/${item.product.id}`}>
                  <img width={100} src={item.product.image} alt="" />
                </Link>
              </td>
              <td>{item.product.price} $</td>

              <td>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    deleteProductInCart(item.product.id);
                  }}
                  width={30}
                  src={deleteIcon}
                  alt=""
                />
              </td>
            </tr>
          ))}
        </tbody>
        
      </Table>
      
    </div>
  );
};

export default CartTable;
