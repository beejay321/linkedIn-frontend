import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import CardProfile from "./CardProfile"
import SearchContent from "./SearchContent"

class SearchResults extends React.Component {
  state = {
    query: "",
    filteredProfiles: [],
  }

  componentDidMount = async () => {
    this.setState({ query: this.props.match.params.query })
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWNhYTYxOWU1ZDAwMTUxZjhmN2QiLCJpYXQiOjE2MjA2MzQ3OTQsImV4cCI6MTYyMTg0NDM5NH0.uEmyf94agpe9Ah6YT4Rinls_egdc0qJQR3PnsoJvS1s",
          },
        }
      )
      if (response.ok) {
        const data = await response.json()
        const fullData = (user) =>
          (
            user.name +
            " " +
            user.surname +
            " " +
            user.title +
            " " +
            user.area
          ).toLowerCase()
        const filteredUsers = data.filter((user) =>
          fullData(user).includes(this.state.query)
        )
        console.log(filteredUsers)
        this.setState({ filteredProfiles: filteredUsers })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>
            <Row>
              <Col xs={8} className="mt-5">
                <CardProfile
                  title="People"
                  content={
                    <SearchContent profiles={this.state.filteredProfiles} />
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SearchResults
