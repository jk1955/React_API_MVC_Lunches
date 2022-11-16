import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// eslint-disable-next-line no-unused-vars
var cuisineId = 0;
// eslint-disable-next-line no-unused-vars
var restaurantId = 0;
// eslint-disable-next-line no-unused-vars
var isHot = null;
// eslint-disable-next-line no-unused-vars
var cost = 0;
// eslint-disable-next-line no-unused-vars
var isDelicious = null;
// eslint-disable-next-line no-unused-vars
var isHealthy = null;

var idx = null;
// eslint-disable-next-line no-unused-vars
var id = null;
// eslint-disable-next-line
var lunch = {};
var lunches = [];
var setShowDetails = null;
var getShowDetails = null;

const DetailsForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="cuisineId">
        <Form.Label>Cuisine Id</Form.Label>
        <Form.Control
          autoComplete="cuisineId"
          type="text"
          placeholder={lunches[idx].cuisineId}
          defaultValue={lunches[idx].cuisineId}
          readOnly={true}
        />
      </Form.Group>

      <Form.Group controlId="restaurantId">
        <Form.Label>Restaurant Id</Form.Label>
        <Form.Control
          autoComplete="restaurantId"
          type="text"
          placeholder={lunches[idx].restaurantId}
          defaultValue={lunches[idx].restaurantId}
          readOnly={true}
        />
      </Form.Group>

      <Form.Group controlId="isHot">
        <Form.Label>Is Hot?</Form.Label>
        <Form.Control
          autoComplete="isHot"
          type="text"
          placeholder={lunches[idx].isHot ? 'true' : 'false'}
          defaultValue={lunches[idx].isHot}
          readOnly={true}
        />
      </Form.Group>

      <Form.Group controlId="cost">
        <Form.Label>Cost</Form.Label>
        <Form.Control
          autoComplete="cost"
          type="text"
          placeholder={lunches[idx].cost}
          defaultValue={lunches[idx].cost}
          readOnly={true}
        />
      </Form.Group>

      <Form.Group controlId="isDelicious">
        <Form.Label>Is Delicious?</Form.Label>
        <Form.Control
          autoComplete="isDelicious"
          type="text"
          placeholder={lunches[idx].isDelicious ? 'true' : 'false'}
          defaultValue={lunches[idx].isDelicious}
          readOnly={true}
        />
      </Form.Group>

      <Form.Group controlId="isHealthy">
        <Form.Label>Is Healthy?</Form.Label>
        <Form.Control
          autoComplete="isHealthy"
          type="text"
          placeholder={lunches[idx].isHealthy ? 'true' : 'false'}
          defaultValue={lunches[idx].isHealthy}
          readOnly={true}
        />
      </Form.Group>
    </Form>
  );
};

function DetailsFormSubmit(e) {
  e.preventDefault();
  setShowDetails(false);

  console.log(lunch, lunches);

  cuisineId = 0;
  restaurantId = 0;
  isHot = null;
  cost = 0;
  isDelicious = null;
  isHealthy = null;

  return;
}

export default function Details(props) {
  if (!props.show) {
    return null;
  }

  idx = props.data[0];
  id = props.data[1];
  lunch = props.data[2];
  lunches = props.data[3];
  setShowDetails = props.data[4];
  getShowDetails = props.data[5];

  // console.log(props, getShowDetails());

  var handleClose = () => {
    setShowDetails(false);
    return;
  };

  return (
    <div>
      <Modal id="DetailsModal" show={getShowDetails} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DetailsForm onSubmit={DetailsFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
