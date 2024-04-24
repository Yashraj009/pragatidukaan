import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { addToCart } from "../slices/cartSlice.js";
// import axios from "axios";

const ProductScreen = () => {
  // console.log(addToCart);
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
      
      const [qty, setQty] = useState(1);
      
      const dispatch = useDispatch();
      const navigate = useNavigate();
      
      const {
        data: product,
        isLoading,
        isError,
      } = useGetProductDetailsQuery(productId);
      // console.log(product);
      const addToCartHandler = () => {
        // dispatch(addToCart({ ...product, qty }));
        // Assuming you're using Redux Toolkit's createSlice, addToCart should be an action creator
        //-----------------------------
        const addToCartAction = addToCart({ ...product, qty });
        dispatch(addToCartAction);
        //-----------------------------
        // const addToCartAction = {
        //   type: "cart/addToCart",
        //   payload: { ...product, qty },
        // };
        // dispatch(addToCartAction);
        navigate("/cart");
};
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {/* In React applications, the Link component from React Router is typically used for navigation between different routes instead of using regular HTML <a> tags. 
        When you use a regular <a> tag, clicking on it would typically trigger a full page reload, which is not desirable in a single-page application (SPA) built with React. The Link component, on the other hand, leverages the browser's history API to handle navigation without causing a full page refresh. */}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError?.message}
        </Message>
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
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                          >
                            {[
                              ...Array(product.countInStock)
                                .keys()
                                .map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )),
                            ]}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroupItem>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      {/* {" "} */}
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
