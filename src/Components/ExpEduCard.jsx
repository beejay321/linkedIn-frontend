import { Row, Col } from 'react-bootstrap';
import '../ExpEduCard.css';
import ModalForm from './MyModal';
import React from 'react';

class ExpEduCard extends React.Component {
  state = {
    expId: this.props.id,
    userId: this.props.userId,
    userName: this.props.userName,
    experience: { ...this.props.experience },
    formRequest: '',
    expImage: null,
    image: this.props.img,
  };

  inputFile = React.createRef();

  handleEdit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api-linkedin-api.herokuapp.com/profile/experiences/${this.state.expId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state.experience),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await fetch(
        `https://api-linkedin-api.herokuapp.com/profile/experiences/${this.state.expId}/picture`,
        {
          method: 'POST',

          body: this.state.expImage,
        }
      );
      if (response.ok) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api-linkedin-api.herokuapp.com/profile/experiences/${this.state.expId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state.experience),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
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
    formData.append('image', file);
    this.setState({
      expImage: formData,
    });
  };

  render() {
    return (
      <Row className="my-4">
        <Col xs={2}>
          <img className="img-fluid px-3" src={this.props.img} alt="" />
        </Col>

        <Col xs={8}>
          <span className="title">{this.props.jobOrSchool}</span>
          <br />
          {this.props.companyOrSubject}
          <br />
          <span className="subtitle">
            {this.props.duration}
            <br />
            {this.props.location}
            <br />
          </span>
          
          {this.props.description}
        </Col>
        <Col xs={2} className="d-flex justify-content-center edit-icon">
          <ModalForm
            formType="edit"
            selectImage={this.selectImage}
            inputFile={this.inputFile}
            handleDelete={this.handleDelete}
            handleSubmit={this.handleEdit}
            handleChange={this.handleChange}
            role={this.state.experience.role}
            company={this.state.experience.company}
            startDate={this.state.experience.startDate}
            description={this.state.experience.description}
            area={this.state.experience.area}
          />
        </Col>
      </Row>
    );
  }
}

export default ExpEduCard;
