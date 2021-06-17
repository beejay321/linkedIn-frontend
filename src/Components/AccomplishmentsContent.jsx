import AccomplishmentsCard from './AccomplishmentsCard';
const AccomplishmentsContent = (props) => {
  return (
    <>
      <AccomplishmentsCard
        type="Languages"
        accomplishments={['Italian', 'French', 'Dutch', 'Afrikaans']}
      />
      <AccomplishmentsCard
        type="Courses"
        accomplishments={[
          'HTML',
          'CSS',
          'Javascript',
          'Typescript',
          'MongoDB',
          'Express',
          'React',
        ]}
      />
    </>
  );
};

export default AccomplishmentsContent;
