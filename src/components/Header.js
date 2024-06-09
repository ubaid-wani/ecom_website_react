import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import img from "../myimgs/logo_1.jpg"

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/ecom_website_react">
        <img src={img} alt="my logo img" className="logo"/>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 30;

  .logo {
    height: 10rem;
    margin-top:10px;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .logo{
      height:7rem;
    }
  }
`;
export default Header;
