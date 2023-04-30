import React from "react";
import { useRoutes } from "react-router-dom";
import ProductProvider from "../contexts/productContext";
import { router } from "../router";
import Header from "./Header/Header";

function Home() {
  const routes = useRoutes(router);
  return (
    <>
      <div>
        <ProductProvider>
          <Header />
          {routes}
        </ProductProvider>
      </div>
    </>
  );
}

export default Home;
