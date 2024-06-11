import React from "react";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub,FaHeart  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <Wrapper>
        {/* footer section */}

        <footer>
          <div className="container grid grid-three-column">
            <div className="footer-about">
              <h3>Ubaid Ashraf Wani</h3>
              <p>Srinagar &#xB7; Jammu and Kashmir &#xB7; India </p>
            </div>
      
            <div className="footer-social">
              <h3>Follow Me</h3>
              <div className="footer-social--icons">
                <div>
                <a
                    href="https://www.linkedin.com/in/ubaidwani1/"
                    target="_blank">
                    <BsLinkedin  className="icons"/>
                  </a>
                </div>
                
                <div><a
                    href="https://github.com/ubaid-wani"
                    target="_blank">
                <FaGithub  className="icons" /></a>
                </div>
                <div>
                  <a
                    href="mailto:ubaidwani133@gmail.com"
                    target="_blank">
                    <IoMdMail className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Me</h3>
              <h3>+917006929877</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="footer-center">
            <p> Made with <FaHeart style={{color:"#2eff2e"}} /> by Ubaid Ashraf Wani </p>
            </div>
            
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
    .footer-center{
      padding-top: 3rem;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:30rem;
      color:red;
    }
   
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
