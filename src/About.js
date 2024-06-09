import HeroSection from "./components/HeroSection";

const About = () => {
const data = {
  title:"ABOUT US",
    name: "Our Mission",
    info:"Our Mission is to empower our clients by providing [specific service/product] that exceeds expectations. We believe in fostering long-term relationships based on trust, transparency, and mutual respect."
  };
  return (
    <>
      <HeroSection mytitle={data.title} myData={data.name} myinfo={data.info} />
    </>
  );
};

export default About;
