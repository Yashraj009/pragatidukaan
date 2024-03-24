import React from "react";
// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
// import axios from "axios";

const ProductScreen = () => {
  // const [product, setProduct] = useState([]);

  const { id: productId } = useParams(); //useParams() is a custom hook provided by React Router that allows functional components to access the parameters from the URL.
  // // { id: productId }, you're extracting the value of the id parameter from the URL and storing it in a variable named productId.
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`/api/products/${productId}`);
  //     setProduct(data);
  //   };

  //   fetchProduct();
  // }, [productId]);
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductDetailsQuery(productId);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {/* In React applications, the Link component from React Router is typically used for navigation between different routes instead of using regular HTML <a> tags. 
        When you use a regular <a> tag, clicking on it would typically trigger a full page reload, which is not desirable in a single-page application (SPA) built with React. The Link component, on the other hand, leverages the browser's history API to handle navigation without causing a full page refresh. */}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <div>{isError?.data?.message || isError.message}</div>
      ) : (
        <>
          <Row>
            <Col md="5">
              <Image src={product.image} alt={product.name} fluid />
              {/* The fluid prop ensures that the image scales appropriately within its
          container. */}
            </Col>
            <Col md="4">
              <ListGroup variant="flush">
                {/* This creates a list group without any borders or rounded corners,
            suitable for displaying product information. */}
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price: ${product.price}</ListGroupItem>
                <ListGroupItem>
                  <strong>Description: </strong>
                  {product.description}
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md="3">
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        <strong>
                          {product.countInStock > 0
                            ? "In Stock"
                            : "Out of Stock"}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      {" "}
                      Add to Cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
