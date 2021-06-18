import { Accordion, Card } from "react-bootstrap";
import React from "react";

import RightColumnOnePerson from "./RightColumnOnePerson";

class RightColumnOne extends React.Component {
  state = {
    profiles: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(`https://api-linkedin-api.herokuapp.com/profile`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({ profiles: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <Card className="RightColumn-card">
        <Card.Header className="bg-white border-0">
          <h5 className="text-left">{this.props.title}</h5>
        </Card.Header>
        <div className="d-flex flex-column my-4">
          <Card.Body className="py-0">
            {this.state.profiles.slice(-4).map((profile) => (
              <RightColumnOnePerson key={profile._id} id={profile._id} image={profile.avatar} name={profile.name} surname={profile.surname} title={profile.title} />
            ))}
          </Card.Body>
          <Accordion defaultActiveKey="0"></Accordion>
        </div>
      </Card>
    );
  }
}
export default RightColumnOne;
