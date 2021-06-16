import { Row, Col } from 'react-bootstrap';
import '../SkillsCard.css';

const SkillsCard = (props) => {
  return (
    <div className="mt-4">
      <p className="skills-title">{props.title}</p>
      <Row className="my-2">
        <Col xs={1}>
          <img className="img-fluid" src={props.img} alt="" />
        </Col>

        <Col xs={11}>
          Endorsed by <b>2 of Aaron's colleagues at{props.workplace}</b>
        </Col>
      </Row>
    </div>
  );
};

export default SkillsCard;
