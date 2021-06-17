import ExpEduCard from './ExpEduCard';
import { Button } from 'react-bootstrap';

const ExperienceContent = (props) => {
  const exp = props.experiences;
  const userId = props.userId;
  const userName = props.userName;
  // const exp = experience.experiences;
  // console.log('this is the shitty experience', exp);
  return (
    <>
      {exp.map((exp) => (
        <ExpEduCard
          experience={exp}
          userId={props.userId}
          jobOrSchool={exp.role}
          companyOrSubject={exp.company}
          duration={exp.startDate}
          location={exp.area}
          description={exp.description}
          id={exp._id}
          img={
            exp.image ||
            'https://res.cloudinary.com/dmqsfltrf/image/upload/v1607933865/linkedin/d5ncpqvqrjwdxixjuyjr.ico'
          }
        />
      ))}

      <a
        href={`https://api-linkedin-api.herokuapp.com/profile/${userId}/pdfDownload`}
        download="save"
        className="download-link"
      >
        {' '}
        <Button variant="secondary" className="button-cv">
          Generate {`${userName}`}'s CV
        </Button>
      </a>
      <a
        href={`https://api-linkedin-api.herokuapp.com/profile/${userId}/experiences/CSV`}
        download="save"
        className="download-link"
      >
        {' '}
        <Button variant="secondary" className="button-csv">
          GET {`${userName}`}'s experiences!
        </Button>
      </a>
    </>
  );
};

export default ExperienceContent;
