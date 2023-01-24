import { Logo } from "components/Logo";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Device } from "utils/viewPort";

const Header = () => {
  const curentPath = window.location.pathname;

  const headerList: { name: string; path: string }[] = [
    { name: "Home", path: "/" },
    { name: "Commercial", path: "/commercial" },
    { name: "Film", path: "/film" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <Container>
      <Logo />
      <HeaderContainer>
        {headerList.map(({ name, path }) => {
          return (
            <HeaderItem key={name} selected={curentPath === path} to={path}>
              {name}
            </HeaderItem>
          );
        })}
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  font-family: "Nanum Myeongjo", serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const HeaderContainer = styled.header`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  margin-top: 2rem;
`;

const HeaderItem = styled(Link)<{ selected: boolean }>`
  width: fit-content;
  padding: 15px;
  color: #fff;
  font-size: 1.2rem;

  text-decoration: ${({ selected }) => (selected ? "underline" : "none")};

  @media screen and ${Device.mobile} {
    font-size: 1rem;
    padding: 15px 10px;
  }
`;
