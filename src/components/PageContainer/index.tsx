import Header from "components/Header";
import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Device } from "utils/viewPort";

export const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 24px;
  margin-top: 2rem;

  @media screen and ${Device.mobile} {
    padding: 24px 0;
  }
`;
