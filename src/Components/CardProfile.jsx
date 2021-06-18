import { Card } from "react-bootstrap";
import "../CardProfile.css";
import ModalForm from "./MyModal";
import React from "react";

class CardProfile extends React.Component {
  state = {
    experience: {},
    expImage: undefined,
  };

  inputFile = React.createRef();

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api-linkedin-api.herokuapp.com/profile/60c9be8b6f63455fa0ee7849/experiences`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.experience),
      });

      if (response.ok) {
        // if (this.state.expImage !== undefined) {
          const data = await response.json();
          console.log(data);
          const expId = data._id;
          const newResponse = await fetch(`https://api-linkedin-api.herokuapp.com/profile/experiences/${expId}/picture`, {
            method: "POST",
            body: this.state.expImage,
          });
          if (newResponse.ok) {
            console.log("Successfully uploaded");
          } else {
            console.log("File not uploaded");
          }
        // }
      }
    } catch (error) {
      console.log(`Something went wrong! ${error}`);
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    let id = e.target.id;
    this.setState({
      experience: { ...this.state.experience, [id]: e.target.value },
    });
  };

  selectImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    this.setState({
      expImage: formData,
    });
  };

  render() {
    return (
      <Card className="my-3">
        <Card.Body>
          <div className=" d-flex justify-content-between">
            <div className="section-title mb-3">{this.props.title}</div>
            <div>
              {this.props.title === "Experience" && this.props.isMe === "60c9be8b6f63455fa0ee7849" && (
                <ModalForm
                  formType="add"
                  selectImage={this.selectImage}
                  inputFile={this.inputFile}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  role={this.state.experience.role}
                  company={this.state.experience.company}
                  startDate={this.state.experience.startDate}
                  description={this.state.experience.description}
                  area={this.state.experience.area}
                />
              )}
            </div>
          </div>
          <div className="text-size">{this.props.content}</div>
        </Card.Body>
      </Card>
    );
  }
}

export default CardProfile;
