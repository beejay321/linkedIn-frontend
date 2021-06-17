import React from 'react';
import '../Post.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import LeftColumnOne from './LeftColumnOne';
import LeftColumnTwo from './LeftColumnTwo';
class LeftColumnHomeFeed extends React.Component {
  state = {
    user: {},
    userExperiences: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://api-linkedin-api.herokuapp.com/profile/60c9be8b6f63455fa0ee7849`
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
          image={this.props.user.avatar}
        />
        <LeftColumnTwo />
      </>
    );
  }
}

export default LeftColumnHomeFeed;
