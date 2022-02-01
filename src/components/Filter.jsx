import React, { useContext, useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productContext } from "../context/MyProvider";

const Filter = () => {
  let search = new URLSearchParams(window.location.search);
  let navigate = useNavigate();
  const { getProducts, products } = useContext(productContext);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [value, setValue] = useState("");

  function filterCars(key, value) {
    search.set(key, value);
    const newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setFrom(search.get("price_gte"));
    setTo(search.get("price_lte"));
    getProducts();
    setValue(search.get("q"));
  }
  function reset() {
    navigate("/");
    getProducts();
    setFrom("");
    setTo("");
    setValue("");
  }

  useEffect(() => {
    setFrom(search.get("price_gte"));
    setTo(search.get("price_lte"));
    setValue(search.get("q"));
  }, []);
  return (
    <div className="main-inputs">
      <div className="filter-input">
        <FormControl
          onChange={(e) => {
            filterCars("price_gte", e.target.value);
          }}
          value={from}
          placeholder="From"
        />
        <FormControl
          onChange={(e) => {
            filterCars("price_lte", e.target.value);
          }}
          value={to}
          placeholder="To"
        />
        <Button onClick={reset} variant="primary">
          RESET
        </Button>
      </div>
      <div>
        <FormControl
          onChange={(e) => {
            filterCars("q", e.target.value);
          }}
          value={value}
          placeholder="Live search..."
        />
      </div>
    </div>
  );
};

export default Filter;
