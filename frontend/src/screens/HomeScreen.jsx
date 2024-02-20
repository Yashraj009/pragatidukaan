import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      // The response object typically contains various properties such as data, status, statusText, headers, etc. The data property specifically holds the response data returned by the server.

      // By using object destructuring syntax { data }, you're extracting the data property from the response object and storing it in a variable named data
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm="12" md="6" lg="4" xl="3">
            <Products product={product} />
            {/* <h3>{product.name}</h3> */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
