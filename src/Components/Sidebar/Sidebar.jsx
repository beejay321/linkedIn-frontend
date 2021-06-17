import './Sidebar.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import SidebarPerson from './SidebarPerson.jsx';

class Sidebar extends React.Component {
  state = {
    profiles: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://api-linkedin-api.herokuapp.com/profile`
      );
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
      <Card className="sidebar">
        <Card.Header className="bg-white border-0 mb-0 pb-0">
          <h5 className="mt-2 text-left">People also viewed</h5>
        </Card.Header>
        <div className="d-flex flex-column my-4">
          <Card.Body className="py-0">
            {this.state.profiles.slice(1).map((profile) => (
              <SidebarPerson
                key={profile._id}
                id={profile._id}
                image={profile.avatar}
                name={profile.name}
                surname={profile.surname}
                title={profile.title}
              />
            ))}
          </Card.Body>
        </div>
      </Card>
    );
  }
}
export default Sidebar;

// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTNmYjYxOWU1ZDAwMTUxZjhmODUiLCJpYXQiOjE2MjA2NDQ4NTksImV4cCI6MTYyMTg1NDQ1OX0.fm075zxqUowsPdcnZmh_76d_SkR-rUgg6MQK86gOvm0
