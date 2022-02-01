import React from "react";
import {  Container } from "react-bootstrap";
import Filter from "../components/Filter";
import FlatsCard from "../components/FlatsCard";
import MyPagination from "../components/MyPagination";

const Home = () => {
  return (
    <Container>
      <Filter />
      <FlatsCard />
      <MyPagination/>
    </Container>
  );
};

export default Home;
