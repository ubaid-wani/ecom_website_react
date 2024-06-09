import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import imgbg from "../myimgs/bg-img.png"

const HeroSection = ({ mytitle,myData,myinfo }) => {

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">{mytitle} </p>
            <h1 > {myData}</h1>
            <p>
             {myinfo}
            </p>
            <NavLink>
              <Button>shop now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="myimages/banner-img.png"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;
  background:url(${imgbg});
  background-size:cover;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      
    
    p {
      margin: 2rem 0;
      font-size:3rem;
      
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-size:10rem;
    }

    .intro-data {
      margin-bottom: 0;
      color:#1c1c1c;
      font-weight: bold;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
   
   .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    .hero-section-data {
      p {
      font-size:2rem;
      
    }

    h1 {
      font-size:6rem;
    }

    }

   
  }
`;

export default HeroSection;
