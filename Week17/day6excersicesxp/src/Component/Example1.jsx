import CvData from "../CvData.json";
const Example1 = (props) => {
  const socialMedia = CvData.SocialMedias;
  return (
    <div>
      <h2>My social Media:</h2>

      {socialMedia.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
};
export default Example1;
