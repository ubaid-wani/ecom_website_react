import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    title:"WELCOME TO",
    name: "Wani Store",
    info:"Explore our curated collection of the latest trends, exclusive deals, and must-have essentials. Start your shopping journey now and elevate your wardrobe effortlessly!"
  };

  return (
    <>
      <HeroSection mytitle={data.title} myData={data.name} myinfo={data.info} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
