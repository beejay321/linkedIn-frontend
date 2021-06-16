import { Row, Col } from 'react-bootstrap';
import '../AccomplishmentsCard.css';

const AccomplishmentsCard = (props) => {
  return (
    <Col xs={6}>
      <Row className="my-2">
        <Col xs={3}>
          <img className="img-fluid px-2" src={props.img} alt="" />
        </Col>

        <Col xs={9}>
          <p>
            <b>{props.page}</b>
            <br />
            {props.followers} followers
          </p>
        </Col>
      </Row>
    </Col>
  );
};

export default AccomplishmentsCard;
