import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import AuthProvider from "./context/AuthProvider";
import MyProvider from "./context/MyProvider";
import AddPage from "./pages/AddPage";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage";
import EditPage from "./pages/EditPage";
import Home from "./pages/Home";

const MyRouter = () => {
  return (
    <div>
      <AuthProvider>
        <MyProvider>
          <BrowserRouter>
            <MyNav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/details/:id" element={<DetailsPage />} />
              <Route path="/edit/:id" element={<EditPage />} />
              <Route path="/cart" element={<CartPage/>} />
            </Routes>
          </BrowserRouter>
        </MyProvider>
      </AuthProvider>
    </div>
  );
};

export default MyRouter;
