import React, { useState } from "react";
import {
  InputGroup,
  Input,
  Button,
  FormText,
  Row,
  Container,
  Col,
} from "reactstrap";

export default function VacancyADD(props) {
  let inputs1 = React.createRef();
  let inputs2 = React.createRef();
  let inputs3 = React.createRef();
  let inputs4 = React.createRef();
  let inputs5 = React.createRef();
  return (
    <>
      <InputGroup>
        <Container>
          <Row>
            <Col>
              <Input
                type="select"
                onChange={(e) => props.changeVacancyInfo(e, "position")}
              >
                <option value="1">intern</option>
                <option value="2">junior</option>
                <option value="3">middle</option>
                <option value="4">senior</option>
              </Input>
              <Input
                innerRef={inputs1}
                onChange={(e) => props.changeVacancyInfo(e, "title")}
                placeholder="Title"
              ></Input>
              <Input
                innerRef={inputs2}
                onChange={(e) => props.changeVacancyInfo(e, "country")}
                placeholder="Country"
              ></Input>
              <Input
                innerRef={inputs3}
                onChange={(e) => props.changeVacancyInfo(e, "city")}
                placeholder="City"
              ></Input>
            </Col>
          </Row>

          <Input
            innerRef={inputs4}
            type="textarea"
            onChange={(e) => props.changeVacancyInfo(e, "description")}
            placeholder="Vacancy description"
          ></Input>

          <Input
            innerRef={inputs5}
            type="date"
            onChange={(e) => props.changeVacancyInfo(e, "deadline")}
            placeholder="2020-10-09"
          ></Input>
            <Button
              onClick={() => {
                inputs1.current.value = "";
                inputs2.current.value = "";
                inputs3.current.value = "";
                inputs4.current.value = "";
                inputs5.current.value = "";
                props.addVacnacy();
              }}
            >
              Add vacancy
            </Button>
        </Container>
      </InputGroup>
    </>
  );
}
