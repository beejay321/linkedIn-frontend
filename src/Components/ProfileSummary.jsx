import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardProfile from './CardProfile';
import SearchContent from './SearchContent';

class Summary extends React.Component {
  state = {
    // query: '',
    Profile: {},
  };

  componentDidMount = async () => {
    // this.setState({ query: this.props.match.params.query });
    try {
      const response = await fetch(
        `https://api-linkedin-api.herokuapp.com/profile/60c9be8b6f63455fa0ee7849`,
        
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        this.setState({Profile: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>
            <Row>
              <Col xs={8} className="mt-5">


                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Summary;
