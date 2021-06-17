import { Card } from "react-bootstrap";
import "../Post.css";

export default function RightColumnTwo() {
  return (
    <Card className="RightColumn-card RightColumnTwo-card">
      <Card.Header className="bg-white">
        <span className="pr-2">Today's most viewed courses</span>
        <i className="bi bi-info-square-fill"></i>
      </Card.Header>
      <Card.Text className="m-0 p-0  px-3">
        <Card.Text>
          <p>1. The Six Morning Habitrs of High Performance</p>
          <div id="RC2-span" className="text-muted p-0 m-0">
            <span>Pete Mockaitis</span>
            <span> | </span>
            <span> How to Be Awesome...</span>
          </div>
        </Card.Text>
        <Card.Text>
          <p className="p-0 m-0">2. Unconcscious Bias</p>
          <div id="RC2-span" className="text-muted p-0 m-0">
            <span>Pete Mockaitis</span>
            <span> | </span>
            <span> How to Be Awesome...</span>
          </div>
        </Card.Text>
        <Card.Text>
          <p>3.Speaking Confidently and Effectivly</p>
          <p>1. The Six Morning Habitrs of High Performance</p>
          <div id="RC2-span" className="text-muted p-0 m-0">
            <span>Pete Mockaitis</span>
            <span> | </span>
            <span> How to Be Awesome...</span>
          </div>
        </Card.Text>
        <hr />
        <Card.Text>
          <span className="text-muted">
            Show more LinkedIn Learning <i className="bi bi-arrow-right"></i>
          </span>
        </Card.Text>
      </Card.Text>
    </Card>
  );
}
