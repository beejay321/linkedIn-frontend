import { Card, Button } from "react-bootstrap"
import "../CardProfile.css"
import ModalForm from "./MyModal"
import React from "react"

class CardProfile extends React.Component {
  state = {
    experience: {},
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log("ciaociao")
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.user}/experiences`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.experience),
        }
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (e) => {
    let id = e.target.id
    this.setState({
      experience: { ...this.state.experience, [id]: e.target.value },
    })
  }

  render() {
    console.log(this.props.user)
    return (
      <Card className="my-3">
        <Card.Body>
          <div className=" d-flex justify-content-between">
            <div className="section-title mb-3">{this.props.title}</div>
            <div>
              {this.props.title === "Experience" &&
                this.props.isMe === "me" && (
                  <ModalForm
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
    )
  }
}

export default CardProfile
