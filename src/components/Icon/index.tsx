import styled from "styled-components";
import React from "react";

type Props = {
  src: string;
  width: string;
};
const Icon = ({ src, width }: Props) => {
  return <Image width={width} src={src} alt="icon" />;
};

export default Icon;

const Image = styled.img<{ width: string }>`
  width: ${({ width }) => width};
  fill: #fff;
`;
