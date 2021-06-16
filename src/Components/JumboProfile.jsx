import { Card, Button } from "react-bootstrap"
import "../JumboProfile.css"
import ProfilePicModal from "./ProfilePicModal"

const JumboProfile = (props) => {
  return (
    <Card>
      <div className="img-container"></div>
      <Card.Body>
        <img className="avatar" src={props.image} />
        {props.isMe === "me" && <ProfilePicModal userId={props.userId} />}
        <Card.Title className="mt-5">
          {props.name} {props.surname}
        </Card.Title>
        <Card.Text>
          <p>
            {props.title}
            <br />
            Creating synergy between clint expectations and product delivery
          </p>
          <p className="location-line">
            {props.area} •{" "}
            <span className="text-primary">
              <b>75 Connections • Contact info</b>
            </span>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default JumboProfile
