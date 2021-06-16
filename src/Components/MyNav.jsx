import { InputGroup, Container, Form, Col, Row, FormControl, Navbar, Nav, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../Nav.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class MyNav extends React.Component {
  render() {
    return (
      // <h1>Linked in </h1>
      <>
        {/* <Navbar bg="light" variant="white">
          <Container>
            <Row>
              <Nav className="mr-auto ">
                <Col>
                  <h1>Navbar</h1>
                </Col>
                <Col>
                  <h1>Navbar</h1>
                </Col>
              </Nav>
            </Row>
          </Container>
        </Navbar> */}

        <Navbar bg="light" variant="white" className="nav-thin" fixed="top">
          <Container>
            <Nav className="ml-5 down-scale">
              <Navbar.Brand href="#home">
                <h1>
                  <i className="bi bi-linkedin fs-1  "></i>
                </h1>
              </Navbar.Brand>

              <Form className="mt-2" onSubmit={() => this.props.history.push(`/search/${this.props.query}`)}>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i id="search-icon" class="bi bi-search"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl id="query" value={this.props.query} onChange={this.props.handleChange} type="text" placeholder="Search" className="mr-sm-2" />
                </InputGroup>
              </Form>
            </Nav>

            <Nav className="mr-auto down-scale">
              <Nav.Link onClick={() => this.props.history.push("/")}>
                <i className="bi bi-house-door-fill"></i>
                <span>Home</span>
              </Nav.Link>

              <Nav.Link>
                {" "}
                <i className="bi bi-people-fill"></i>
                <span>Network</span>
              </Nav.Link>
              <Nav.Link>
                <i className="bi bi-briefcase-fill"></i> <span>Jobs</span>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <i className="bi bi-chat-dots-fill"></i>
                <span>Messaging</span>
              </Nav.Link>
              <Nav.Link>
                <i className="bi bi-bell-fill"></i>
                <span>Notifications</span>
              </Nav.Link>

              <Nav.Link onClick={() => this.props.history.push("/user/60c9be8b6f63455fa0ee7849")}>
                <i className="bi bi-person-circle"></i> <span> Me</span>
              </Nav.Link>

              <Nav.Link id="work-icon">
                <i className="bi bi-grid-3x3-gap-fill"></i> <span> Work</span>
              </Nav.Link>
              <Nav.Link id="reactivate">
                <span>
                  Reactivate <br /> Premium
                </span>
              </Nav.Link>

              {/* <Nav.Link href="#pricing" className="ml-3">
                <i className="bi bi-grid-3x3-gap-fill"></i>{" "}
                <span>
                  <NavDropdown
                    title="Work"
                    id="basic-nav-dropdown"
                  ></NavDropdown>
                </span>
              </Nav.Link> */}

              {/* <NavDropdown title="Work" id="basic-nav-dropdown">
                    
                  </NavDropdown> */}
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withRouter(MyNav);
