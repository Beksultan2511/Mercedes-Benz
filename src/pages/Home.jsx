import React from "react";
import {  Container } from "react-bootstrap";
import CarsCard from "../components/CarsCard";
import Filter from "../components/Filter";
import MyPagination from "../components/MyPagination";

const Home = () => {
  return (
    <Container>
      <Filter />
      <CarsCard />
      <MyPagination/>
    </Container>
  );
};

export default Home;
