import { PageContainer } from "components/PageContainer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const FilmListPage = () => {
  const navigate = useNavigate();

  const onClickThumnail = (id: number) => {
    navigate(`/film/${id}`);
  };

  return (
    <PageContainer>
      <VideoList></VideoList>
    </PageContainer>
  );
};

const VideoList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
