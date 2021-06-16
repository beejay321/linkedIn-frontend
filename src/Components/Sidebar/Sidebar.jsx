import "./Sidebar.css";
import { Accordion, Card, Button, ListGroup } from "react-bootstrap";
import SidebarPerson from "./SidebarPerson.jsx";
import { useState, useEffect } from "react";

const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTNmYjYxOWU1ZDAwMTUxZjhmODUiLCJpYXQiOjE2MjA2NDQ4NTksImV4cCI6MTYyMTg1NDQ1OX0.fm075zxqUowsPdcnZmh_76d_SkR-rUgg6MQK86gOvm0";

async function getAllProfiles(auth) {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const response = await fetch(url, { headers: { Authorization: auth } });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
}

export default function Sidebar() {
  const [profilesData, updateProfilesData] = useState([]);
  useEffect(async () => {
    updateProfilesData(await getAllProfiles(auth));
  }, []);
  function mapProfiles(limit) {
    return profilesData.slice(limit, randomInteger(95, 101)).map((profile) => {
      return (
        <SidebarPerson
          key={profile._id}
          id={profile._id}
          image={profile.image}
          name={profile.name}
          surname={profile.surname}
          title={profile.title}
        />
      );
    });
  }
  function mapProfileShowMore(limit) {
    return profilesData.slice(limit, randomInteger(55, 62)).map((profile) => {
      return (
        <SidebarPerson
          key={profile._id}
          id={profile._id}
          image={profile.image}
          name={profile.name}
          surname={profile.surname}
          title={profile.title}
        />
      );
    });
  }
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <Card className="sidebar">
      <Card.Header className="bg-white border-0 mb-0 pb-0">
        <h5 className="mt-2 text-left">People also viewed</h5>
      </Card.Header>
      <div className="d-flex flex-column my-4">
        <Card.Body className="py-0">
          {mapProfiles(randomInteger(91, 94))}
        </Card.Body>
        <Accordion defaultActiveKey="0">
          <Accordion.Collapse eventKey="1">
            <Card.Body> {mapProfileShowMore(randomInteger(45, 49))}</Card.Body>
          </Accordion.Collapse>
          <Card.Header
            onclick="myFunction()"
            id="sidebar-showmore"
            className="p-0 m-0 full-width text-center bg-white"
          >
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Show More
            </Accordion.Toggle>
          </Card.Header>
        </Accordion>
      </div>
    </Card>
  );
}

// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTNmYjYxOWU1ZDAwMTUxZjhmODUiLCJpYXQiOjE2MjA2NDQ4NTksImV4cCI6MTYyMTg1NDQ1OX0.fm075zxqUowsPdcnZmh_76d_SkR-rUgg6MQK86gOvm0
