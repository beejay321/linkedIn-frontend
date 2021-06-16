import { Accordion, Card, Button, ListGroup } from "react-bootstrap";
import RightColumnOnePerson from "./RightColumnOnePerson";
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

export default function RightColumnOne() {
  const [profilesData, updateProfilesData] = useState([]);
  useEffect(async () => {
    updateProfilesData(await getAllProfiles(auth));
  }, []);
  function mapProfiles(limit) {
    return profilesData.slice(-4).map((profile) => {
      return (
        <RightColumnOnePerson
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

  return (
    <Card className="RightColumn-card">
      <Card.Header className="bg-white border-0">
        <h5 className="text-left">Add to your feed</h5>
      </Card.Header>
      <div className="d-flex flex-column my-4">
        <Card.Body>{mapProfiles()}</Card.Body>
        <Accordion defaultActiveKey="0"></Accordion>
      </div>
    </Card>
  );
}

// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTNmYjYxOWU1ZDAwMTUxZjhmODUiLCJpYXQiOjE2MjA2NDQ4NTksImV4cCI6MTYyMTg1NDQ1OX0.fm075zxqUowsPdcnZmh_76d_SkR-rUgg6MQK86gOvm0
