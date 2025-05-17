import { PageContainer } from "components/PageContainer";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const FilmListPage = () => {
  const navigate = useNavigate();

  const filmList = [
    { name: "있는힘껏", src: require("images/film/film_1/main.JPG") },
    {
      name: "불안은 영혼을 잠식한다",
      src: require("images/film/film_2/main.jpeg"),
    },
    {
      name: "황금마차 떠났다",
      src: require("images/film/film_3/main.jpeg"),
    },
    {
      name: "너의 기억",
      src: require("images/film/film_4/main.jpeg"),
    },
    {
      name: "출장",
      src: require("images/film/film_5/main.jpeg"),
    },
  ];

  const onClickThumbnail = (id: number) => {
    navigate(`/film/${id}`);
  };

  return (
    <PageContainer>
      <FilmList>
        {filmList.map((film, index) => {
          return (
            <ThumbnailImage
              key={film.name}
              src={film.src}
              onClick={() => onClickThumbnail(index + 1)}
            />
          );
        })}
      </FilmList>
    </PageContainer>
  );
};

const FilmList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;

  &:nth-child(1) {
    width: calc((100% - 2rem) / 3);
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  &:nth-child(2) {
    width: calc((100% - 2rem) / 3);
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  &:nth-child(3) {
    width: calc((100% - 2rem) / 3);
    margin-bottom: 1rem;
  }

  &:nth-child(4) {
    margin-bottom: 1rem;
  }

  &:nth-child(5) {
    margin-bottom: 1rem;
  }
`;
