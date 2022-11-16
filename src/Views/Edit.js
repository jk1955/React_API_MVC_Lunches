import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var cuisineId = 0;
var restaurantId = 0;
var isHot = null;
var cost = 0;
var isDelicious = null;
var isHealthy = null;

var idx = null;
var id = null;
// eslint-disable-next-line
var lunch = {};
var lunches = [];
var setShowEdit = null;
var getShowEdit = null;
var putdata = null;

const EditForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="cuisineId">
        <Form.Label>Cuisine Id</Form.Label>
        <Form.Control
          autoComplete="cuisineId"
          type="text"
          placeholder={lunches[idx].cuisineId}
          defaultValue={lunches[idx].cuisineId}
          onChange={(e) => (cuisineId = e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="restaurantId">
        <Form.Label>Restaurant Id</Form.Label>
        <Form.Control
          autoComplete="restaurantId"
          type="text"
          placeholder={lunches[idx].restaurantId}
          defaultValue={lunches[idx].restaurantId}
          onChange={(e) => (restaurantId = e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="isHot">
        <Form.Label>Is Hot?</Form.Label>
        <Form.Control
          autoComplete="isHot"
          type="boolean"
          placeholder={lunches[idx].isHot ? 'true' : 'false'}
          defaultValue={lunches[idx].isHot}
          onChange={(e) => (isHot = e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="cost">
        <Form.Label>Cost</Form.Label>
        <Form.Control
          autoComplete="cost"
          type="number"
          placeholder={lunches[idx].cost}
          defaultValue={lunches[idx].cost}
          onChange={(e) => (cost = e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="isDelicious">
        <Form.Label>Is Delicious?</Form.Label>
        <Form.Control
          autoComplete="isDelicious"
          type="boolean"
          placeholder={lunches[idx].isDelicious ? 'true' : 'false'}
          defaultValue={lunches[idx].isDelicious}
          onChange={(e) => (isDelicious = e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="isHealthy">
        <Form.Label>Is Healthy?</Form.Label>
        <Form.Control
          autoComplete="isHealthy"
          type="boolean"
          placeholder={lunches[idx].isHealthy ? 'true' : 'false'}
          defaultValue={lunches[idx].isHealthy}
          onChange={(e) => (isHealthy = e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" block="true">
        Save
      </Button>
    </Form>
  );
};

export default function Edit(props) {
  if (!props.show) {
    return null;
  }

  idx = props.data[0];
  id = props.data[1];
  lunch = props.data[2];
  lunches = props.data[3];
  setShowEdit = props.data[4];
  getShowEdit = props.data[5];
  putdata = props.data[6];

  // console.log(props);

  var handleClose = () => {
    setShowEdit(false);
    return;
  };

  const onEditFormSubmit = (e) => {
    e.preventDefault();
    setShowEdit(false);

    if (cuisineId !== null) {
      lunches[idx].cuisineId = cuisineId;
    }

    if (restaurantId !== 0) {
      lunches[idx].restaurantId = restaurantId;
    }
    lunches[idx].isHot = isHot;

    if (cost !== 0) {
      lunches[idx].cost = cost;
    }
    if (isDelicious !== null) {
      lunches[idx].isDelicious = isDelicious;
    }

    if (isHealthy !== null) {
      lunches[idx].isHealthy = isHealthy;
    }

    cuisineId = 0;
    restaurantId = 0;
    isHot = null;
    cost = 0;
    isDelicious = null;
    isHealthy = null;

    putdata(lunches[idx], id);

    return;
  };

  return (
    <div>
      <Modal id="editModal" show={getShowEdit} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm onSubmit={onEditFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
