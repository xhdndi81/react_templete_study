/**
 * 2020-12-07 : 김경식
 */

import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

class Login extends React.Component {
  render() {
    return(
      <>
        <PanelHeader size="sm" />
        <div className="content">

          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Login</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1">
                        <label>ID</label>
                        <Input
                            placeholder="Id"
                            type="text"
                          />
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>
      </>
    );
  }
}

export default Login;