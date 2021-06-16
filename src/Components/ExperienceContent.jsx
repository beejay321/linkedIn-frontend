import ExpEduCard from "./ExpEduCard";

const ExperienceContent = (props) => {
  const experience = props.experiences;
  // const experiencess = experiences.experiences
  console.log("this is the shitty experience", experience);
  return (
    <>
      {experience.map((exp) => (
        <ExpEduCard
          experience={exp}
          userId={props.userId}
          userName={props.userName}
          jobOrSchool={exp.role}
          companyOrSubject={exp.company}
          duration={exp.startDate}
          location={exp.area}
          description={exp.description}
          id={exp._id}
          img={exp.image || "https://res.cloudinary.com/dmqsfltrf/image/upload/v1607933865/linkedin/d5ncpqvqrjwdxixjuyjr.ico"}
        />
      ))}
    </>
  );
};

export default ExperienceContent;
