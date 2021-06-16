import { Row, Col } from "react-bootstrap"
import "../AccomplishmentsCard.css"

const AccomplishmentsCard = (props) => {
  return (
    <div className="mt-4">
      <Row className="my-2">
        <Col xs={1} className="d-flex justify-content-end">
          <div className="number text-primary">
            {props.accomplishments.length}
          </div>
        </Col>

        <Col xs={11}>
          <p>
            <span className="text-primary line-height-custom">
              <b>{props.type}</b>
            </span>
            <br />
            {props.accomplishments.join("  •  ")}
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default AccomplishmentsCard
