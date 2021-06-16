import React from "react";
import "../Post.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Card, Image } from "react-bootstrap";
import LeftColumnOne from "./LeftColumnOne";
import LeftColumnTwo from "./LeftColumnTwo";
class LeftColumnHomeFeed extends React.Component {
  state = {
    user: {},
    userExperiences: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.match.params.id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ user: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <LeftColumnOne
          name={this.props.user.name}
          surname={this.props.user.surname}
          title={this.props.user.title}
          area={this.props.user.area}
          image={this.props.user.image}
        />
        <LeftColumnTwo />
      </>
    );
  }
}

export default LeftColumnHomeFeed;
