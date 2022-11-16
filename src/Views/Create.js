import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var cuisineId = 0;
var restaurantId = 0;
var isHot = null;
var cost = 0;
var isDelicious = null;
var isHealthy = null;

var lunch = {};
// eslint-disable-next-line no-unused-vars
var lunches = [];
var setShowCreate = null;
var getShowCreate = null;
var postData = null;

const CreateForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="cuisineId">
        <Form.Label>CuisineId</Form.Label>
        <Form.Control
          autoComplete="Cuisine ID"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (cuisineId = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="restaurantId">
        <Form.Label>RestaurantId</Form.Label>
        <Form.Control
          autoComplete="Restaurant ID"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (restaurantId = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="isHot">
        <Form.Label>Is Hot?</Form.Label>
        <Form.Control
          autoComplete="isHot"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (isHot = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="cost">
        <Form.Label>Cost</Form.Label>
        <Form.Control
          autoComplete="cost"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (cost = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="isDelicious">
        <Form.Label>Is Delicious?</Form.Label>
        <Form.Control
          autoComplete="isDelicious"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (isDelicious = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="isHealthy">
        <Form.Label>is Healthy?</Form.Label>
        <Form.Control
          autoComplete="isHealthy"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (isHealthy = e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" block="true">
        Save
      </Button>
    </Form>
  );
};

function CreateFormSubmit(e) {
  e.preventDefault();
  setShowCreate(false);

  if (restaurantId === null) return;

 lunch.cuisineId = cuisineId;
 lunch.restaurantId = restaurantId;
 lunch.isHot = isHot;
 lunch.cost = cost;
 lunch.isDelicious = isDelicious;
 lunch.isHealthy = isHealthy;

  postData(lunch);

  // console.log(lunch, lunches);

  cuisineId = null;
  restaurantId = 0;
  isHot = null;
  cost = 0;
  isDelicious = null;
  isHealthy = null;


  return;
}

export default function Create(props) {
  if (!props.show) {
    return null;
  }

  lunch = props.data[0];
  lunches = props.data[1];
  setShowCreate = props.data[2];
  getShowCreate = props.data[3];
  postData = props.data[4];

  // console.log(props, getShowCreate());

  var handleClose = () => {
    setShowCreate(false);
    return;
  };

  return (
    <div>
      <Modal id="createModal" show={getShowCreate} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateForm onSubmit={CreateFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
