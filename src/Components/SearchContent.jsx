import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../ExpEduCard.css"

const SearchContent = (props) => {
  return (
    <>
      {props.profiles.map((pr) => {
        return (
          <Container>
            <Link to={`/user/${pr._id}`} style={{ textDecoration: "none" }}>
              <Row className="py-1">
                <Col xs={2}>
                  <img src={pr.image} className="round" />
                </Col>
                <Col xs={10} className="text-deco">
                  <span className="title">
                    {pr.name} {pr.surname}
                  </span>
                  <br />
                  {pr.title}
                  <br />
                  <span className="subtitle">{pr.area}</span>
                </Col>
              </Row>
              <hr />
            </Link>
          </Container>
        )
      })}
    </>
  )
}

export default SearchContent
