import { PageContainer } from "components/PageContainer";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Device } from "utils/viewPort";
import { getFilmData } from "./data";

export const FilmDetailPage = () => {
  const { id } = useParams();

  const filmData = useMemo(() => {
    return getFilmData(Number(id));
  }, [id]);

  return (
    <PageContainer>
      {!filmData ? (
        <></>
      ) : (
        <Wrapper>
          <Title>{filmData.title}</Title>
          <ImageList>
            {filmData.sceenImageSrcList.map((imageSource) => {
              return (
                <Image
                  key={imageSource}
                  src={require(`images/film${imageSource}`)}
                />
              );
            })}
          </ImageList>
        </Wrapper>
      )}
    </PageContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Nanum Myeongjo", serif;
`;

const Title = styled.div`
  color: white;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-wright: 400;

  @media screen and ${Device.mobile} {
    font-size: 1.5rem;
    margin: 0 0.5rem 2rem 0.5rem;
  }
`;

const ImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 1024px;
  width: 100%;
  margin-bottom: 2rem;
`;
