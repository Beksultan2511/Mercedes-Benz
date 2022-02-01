import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";
import { API } from "../helpers/const";

export const productContext = React.createContext();
let cart = JSON.parse(localStorage.getItem("cart"))
const INIT_STATE = {
  flats: null,
  details: null,
  toEdit: null,
  productsCount: cart ? cart.products.length : 0,
  cart: null,
  products: null
};
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_FLAT":
      return {
        ...state,
        flats: action.payload,
      };
      case "GET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
    case "DETAILS_FLAT":
      return {
        ...state,
        details: action.payload,
      };
    case "GET_TO_EDIT":
      return {
        ...state,
        toEdit: action.payload,
      };
    case 'ADD_AND_DELETE':
      return{
        ...state,
        productsCount: action.payload
      }
    case "GET_CART":
        return {
          ...state,
          cart: action.payload,
        };
    default:
      return state;
  }
};

const MyProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addFlat(newFlat) {
    try {
      await axios.post(API, { ...newFlat, price: +newFlat.price });
    } catch (error) {
      console.log(error);
    }
    getProducts();
  }
  async function getFlat() {
    try {
      let response = await axios(API);
      console.log(response)
      let action = {
        type: "GET_FLAT",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }
  async function detailsFlat(id) {
    try {
      let response = await axios(`${API}/${id}`);
      let action = {
        type: "DETAILS_FLAT",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteFlat(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function getToEdit(id) {
    try {
      let response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }
  async function saveEdited(editedCar) {
    console.log(editedCar);
    try {
      await axios.patch(`${API}/${editedCar.id}`, editedCar);
      getFlat();
    } catch (error) {
      console.log(error);
    }
  }

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(()=>{
    const fetchCars = async () => {
      if(state.products){
        setPosts(state.products)
      }
    }
    fetchCars()
  },[state.products]) 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  let totalCount = posts.length;

//favourites
function addAndDelete(product) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      products: [],
      totalPrice: 0,
    };
  }
  let cartProduct = {
    product,
    count: 1,
    subPrice: 0,
  };
  cartProduct.subPrice = calcSubPrice(cartProduct);
  let check = cart.products.find((item) => {
    return item.product.id === product.id;
  });
  if (!check) {
    cart.products.push(cartProduct);
  } else {
    cart.products = cart.products.filter((item) => {
      return item.product.id !== product.id;
    });
  }
  cart.totalPrice = calcTotalPrice(cart.products);
  localStorage.setItem("cart", JSON.stringify(cart));
  let action = {
    type: "ADD_AND_DELETE",
    payload: cart.products.length,
  };
  dispatch(action);
}
function checkProductInCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      products: [],
    };
  }
  let check = cart.products.find((item) => {
    return item.product.id === id;
  });
  if (!check) {
    return false;
  } else {
    return true;
  }
}

function getCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      totalPrice: 0,
      products: [],
    };
  }
  let action = {
    type: "GET_CART",
    payload: cart,
  };
  dispatch(action);
}

function changeCount(value, id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.products = cart.products.map((item) => {
    if (item.product.id === id) {
      item.count = value;
      item.subPrice = calcSubPrice(item);
    }
    return item;
  });
  cart.totalPrice = calcTotalPrice(cart.products);
  localStorage.setItem("cart", JSON.stringify(cart));
  getCart();
}

function deleteProductInCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.products = cart.products.filter((item) => {
    return item.product.id !== id;
  });
  cart.totalPrice = calcTotalPrice(cart.products)
  localStorage.setItem('cart', JSON.stringify(cart))
  getCart()
  let action = {
    type: 'ADD_AND_DELETE',
    payload: cart.products.length
  }
  dispatch(action)
}

const getProducts = async () => {
  try {
    const response = await axios(`${API}${window.location.search}`);
    let action = {
      type: "GET_PRODUCTS",
      payload: response.data,
    };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <productContext.Provider
      value={{
        getProducts,
        saveEdited,
        getToEdit,
        toEdit: state.toEdit,
        deleteFlat,
        detailsFlat,
        details: state.details,
        addFlat,
        getFlat,
        flats: state.flats,
        postsPerPage,
        totalCount,
        currentPosts,
        currentPage,
        setCurrentPage,
        addAndDelete,
        productsCount: state.productsCount,
        checkProductInCart,
        getCart,
        changeCount,
        deleteProductInCart,
        cart: state.cart,
        products: state.products,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default MyProvider;
