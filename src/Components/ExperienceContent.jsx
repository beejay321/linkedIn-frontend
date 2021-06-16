import ExpEduCard from "./ExpEduCard"

const ExperienceContent = (props) => {
  const experiences = props.experiences
  return (
    <>
      {experiences.map((exp) => {
        return (
          <ExpEduCard
            experience={exp}
            userId={props.user}
            jobOrSchool={exp.role}
            companyOrSubject={exp.company}
            duration={exp.startDate}
            location={exp.area}
            description={exp.description}
            id={exp._id}
            img={
              exp.image ||
              "https://res.cloudinary.com/dmqsfltrf/image/upload/v1607933865/linkedin/d5ncpqvqrjwdxixjuyjr.ico"
            }
          />
        )
      })}
    </>
  )
}

export default ExperienceContent
