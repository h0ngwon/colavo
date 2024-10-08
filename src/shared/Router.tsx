import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Discount from "../pages/Discount";
import Home from "../pages/Home";
import Item from "../pages/Item";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/item" element={<Item />} />
          <Route path="/discount" element={<Discount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
