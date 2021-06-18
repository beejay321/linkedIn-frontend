import RightColumnOne from "./RightColumnOne.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import RightColumnTwo from "./RightColumnTwo.jsx";

class RightColumnHomeFeed extends React.Component {
  render() {
    return (
      <>
        <RightColumnOne title = {"My Connections"} />
        <RightColumnOne title = {"People Also Viewed"} />
        <RightColumnTwo />
        <RightColumnTwo />
      </>
    );
  }
}

export default RightColumnHomeFeed;
// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTNmYjYxOWU1ZDAwMTUxZjhmODUiLCJpYXQiOjE2MjA2NDQ4NTksImV4cCI6MTYyMTg1NDQ1OX0.fm075zxqUowsPdcnZmh_76d_SkR-rUgg6MQK86gOvm0
