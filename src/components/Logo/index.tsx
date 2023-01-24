import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Logo = () => {
  const navigate = useNavigate();

  const clickLogo = () => {
    navigate("/");
  };

  return <LogoContaier onClick={clickLogo}>B.H</LogoContaier>;
};

const LogoContaier = styled.div`
  font-family: "Nanum Myeongjo", serif;
  color: #fff;
  font-size: 3rem;
  border: 1px solid #fff;
  padding: 1rem 2rem;
`;
