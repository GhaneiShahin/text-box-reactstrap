import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const App = () => {
  const [getValue, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    alert(`The name is ${getValue}`);
    event.preventDefault();
  };

  return (
    <Container>
      <Row style={{ padding: 20 }}>
        <Col>
          <Alert color="success" style={{ height: 50 }}>
            {getValue}
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input id="name" type="text" onChange={handleChange} />
            </FormGroup>
            <Button color="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
