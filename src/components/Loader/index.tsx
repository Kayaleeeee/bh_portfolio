import React from "react";
import styled from "styled-components";
import { Device } from "utils/viewPort";

export const Loader = () => {
  return (
    <LoaderWrapper className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 54px;
    height: 54px;
    margin: 8px;
    border: 6px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @media screen and ${Device.mobile} {
    width: 40px;
    height: 40px;

    div {
      border-width: 4px;
      width: 30px;
      height: 30px;
      margin: 5px;
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
