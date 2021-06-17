import React from "react";
import JumboProfile from "./JumboProfile";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar/Sidebar";
import CardProfile from "./CardProfile";
import About from "./AboutProfile";
import ExperienceContent from "./ExperienceContent";
import EducationContent from "./EducationContent";
import SkillsContent from "./SkillsContent";
import AccomplishmentsContent from "./AccomplishmentsContent";
import InterestsContent from "./InterestsContent";
import ProfileSummary from "./ProfileSummary"

class Home extends React.Component {
  state = {
    user: {},
    userExperiences: [],
  };
  // ${this.props.match.params.id}

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://api-linkedin-api.herokuapp.com/profile/${this.props.match.params.id}
        `
      );
      if (response.ok) {
        const data = await response.json();

        this.setState({ user: data });
      }
    } catch (error) {
      console.log(error);
    }

    const userId = this.state.user._id;

    // const userName = this.state.user.surname;

    try {
      const xpResponse = await fetch(`https://api-linkedin-api.herokuapp.com/profile/${userId}/experiences`);
      if (xpResponse.ok) {
        const xpData = await xpResponse.json();

        this.setState({ userExperiences: xpData.experiences });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.match.params.id === this.props.match.params.id) {
      return;
    }
    try {
      const response = await fetch(`https://api-linkedin-api.herokuapp.com/profile/${this.props.match.params.id}`);
      if (response.ok) {
        const data = await response.json();
        this.setState({ user: data });
      }
    } catch (error) {
      console.log(error);
    }

    const userId = this.props.match.params.id === "me" ? this.state.user._id : this.props.match.params.id;

    try {
      const xpResponse = await fetch(`https://api-linkedin-api.herokuapp.com/profile/${userId}/experiences`);
      if (xpResponse.ok) {
        const xpData = await xpResponse.json();

        this.setState({ userExperiences: xpData.experiences });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container className="profile-container">
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>
            <Row>
              <Col xs={8} className="mt-5">
                <JumboProfile
                  isMe={this.props.match.params.id}
                  userId={this.state.user._id}
                  name={this.state.user.name}
                  surname={this.state.user.surname}
                  title={this.state.user.title}
                  area={this.state.user.area}
                  image={this.state.user.avatar}
                />
                <CardProfile  content={<ProfileSummary user={this.state.user} />} />
                <CardProfile title="About" content={<About bio={this.state.user.bio} />} />
                <CardProfile
                  title="Experience"
                  user={this.state.user._id}
                  isMe={this.props.match.params.id}
                  content={<ExperienceContent experiences={this.state.userExperiences} userId={this.state.user._id} userName={this.state.user.surname} />}
                />
                <CardProfile title="Education" content={<EducationContent />} />
                <CardProfile title={"Skills & Endorsements"} content={<SkillsContent />} />
                <CardProfile user={this.state.user._id} title="Accomplishments" content={<AccomplishmentsContent />} />
                <CardProfile user={this.state.user._id} title="Interests" content={<InterestsContent />} />
              </Col>
              <Col xs={4}>
                <Sidebar />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
