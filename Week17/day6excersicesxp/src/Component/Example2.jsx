import CvData from "../CvData.json";
const Example2 = (props) => {
  const skills = CvData.Skills;
  return (
    <div>
      <h2>Skills:</h2>
      {skills.map((skillArea, index) => (
        <div key={index}>
          <h3>{skillArea.Area}</h3>
          <ul>
            {skillArea.SkillSet.map((skill, indx) => (
              <li key={indx}>
                {skill.Name}-{skill.Hot ? "Know" : "Dont know"}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Example2;
