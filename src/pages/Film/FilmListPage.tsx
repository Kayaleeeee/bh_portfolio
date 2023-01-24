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

  const onClickThumnail = (id: number) => {
    navigate(`/film/${id}`);
  };

  return (
    <PageContainer>
      <FilmList>
        {filmList.map((film, index) => {
          return (
            <ThumnailImage
              key={film.name}
              src={film.src}
              onClick={() => onClickThumnail(index + 1)}
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

const ThumnailImage = styled.img`
  width: 100%;
  height: auto;

  &:nth-child(1) {
    width: 50%;
  }

  &:nth-child(2) {
    width: 50%;
  }

  &:nth-child(3) {
    width: 50%;
  }

  &:nth-child(4) {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;
