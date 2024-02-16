import React from 'react'
import { useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = () => {
    const { id: productId } = useParams();
    const product = products.find((p) => p._id === productId);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {/* In React applications, the Link component from React Router is typically used for navigation between different routes instead of using regular HTML <a> tags. 
        When you use a regular <a> tag, clicking on it would typically trigger a full page reload, which is not desirable in a single-page application (SPA) built with React. The Link component, on the other hand, leverages the browser's history API to handle navigation without causing a full page refresh. */}
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
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
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
  );
}

export default ProductScreen