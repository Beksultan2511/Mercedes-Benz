import React, { useContext, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../context/MyProvider";
import deleteIcon from "../images/delete.png";
import CreditCardPage from "./CreditCardPage";
import ModalOrder from "./ModalOrder";

const CartTable = ({ cart }) => {
  const { changeCount, deleteProductInCart } = useContext(productContext);
  const [order, setOrder] = useState(null);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Color</th>
            <th>Year</th>
            <th>Image</th>
            <th>Count</th>
            <th>SubPrice</th>
            <td>#</td>
          </tr>
        </thead>
        <tbody>
          {cart.products.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.brand}</td>
              <td>{item.product.color}</td>
              <td>{item.product.year}</td>
              <td>
                <Link to={`/details/${item.product.id}`}>
                  <img width={100} src={item.product.image} alt="" />
                </Link>
              </td>
              <td>
                <input
                  style={{
                    textAlign: "center",
                    width: "50px",
                    borderRadius: "25px",
                    border: "1px solid black",
                  }}
                  onChange={(e) => {
                    if (e.target.value < 1) {
                      return;
                    }
                    changeCount(e.target.value, item.product.id);
                  }}
                  type="number"
                  value={item.count}
                />
              </td>
              <td>{item.subPrice}$</td>
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
        <tfoot>
          <tr>
            <td>
              <strong>Total price:</strong>
            </td>
            <td>{cart.totalPrice}$</td>
            <td>
                <ModalOrder/>
            </td>
          </tr>
        </tfoot>
      </Table>
      {/* <CreditCardPage/> */}
    </div>
  );
};

export default CartTable;
