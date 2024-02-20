import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  // using the useState hook to initialize a state variable named products with an empty array as its initial value. The setProducts function is a setter function provided by the useState hook, which is used to update the value of the products state variable.


  useEffect(() => {
    // useEffect hook is used to perform side effects in functional components, such as data fetching, subscriptions, or DOM manipulation. In this case, you're using it to fetch products data from the server when the component mounts.
    const fetchProducts = async () => {


      const { data } = await axios.get("/api/products");
      // The response object typically contains various properties such as data, status, statusText, headers, etc. The data property specifically holds the response data returned by the server.

      // This function sends an HTTP GET request to the /api/products endpoint using Axios
      // When the request resolves successfully, Axios returns a response object.

      // By using object destructuring syntax { data }, you're extracting the data property from the response object and storing it in a variable named data
      setProducts(data);

      // Finally, you're updating the products state variable with the response data obtained from the server. This triggers a re-render of the component with the updated products state, causing any UI elements dependent on products to reflect the fetched data.
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
