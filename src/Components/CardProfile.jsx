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
        `https://api-linkedin-api.herokuapp.com/profile/${this.props.user}/experiences`,
        {
          method: "POST",
          headers: {
            
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
