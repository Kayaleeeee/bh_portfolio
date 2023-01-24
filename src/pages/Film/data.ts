type FilmDataType = {
  title: string;
  sceenImageSrcList: string[];
};

const film_1_data = {
  title: "있는 힘껏 (2021)",
  sceenImageSrcList: [
    "/film_1/1.jpeg",
    "/film_1/2.jpeg",
    "/film_1/3.jpeg",
    "/film_1/4.jpeg",
    "/film_1/5.jpeg",
    "/film_1/6.jpeg",
    "/film_1/7.jpeg",
    "/film_1/8.jpeg",
    "/film_1/9.jpeg",
    "/film_1/10.jpeg",
    "/film_1/11.jpeg",
    "/film_1/12.jpeg",
    "/film_1/13.JPG",
    "/film_1/14.JPG",
    "/film_1/15.JPG",
    "/film_1/16.JPG",
  ],
};

const film_2_data = {
  title: "불안은 영혼을 잠식한다 (2022)",
  sceenImageSrcList: [
    "/film_2/1.png",
    "/film_2/2.png",
    "/film_2/3.png",
    "/film_2/4.png",
    "/film_2/5.png",
    "/film_2/6.png",
    "/film_2/7.png",
    "/film_2/8.png",
    "/film_2/9.png",
    "/film_2/10.png",
    "/film_2/11.png",
    "/film_2/12.png",
    "/film_2/13.png",
    "/film_2/14.png",
    "/film_2/15.png",
    "/film_2/16.png",
  ],
};

const film_3_data = {
  title: "황금마차 떠났다 (2022)",
  sceenImageSrcList: [
    "/film_3/1.png",
    "/film_3/3.png",
    "/film_3/4.png",
    "/film_3/5.png",
    "/film_3/6.png",
    "/film_3/7.png",
    "/film_3/8.png",
    "/film_3/9.png",
    "/film_3/10.png",
    "/film_3/11.png",
    "/film_3/12.png",
    "/film_3/13.png",
    "/film_3/14.png",
    "/film_3/15.png",
    "/film_3/16.png",
  ],
};

const film_4_data = {
  title: "너의 기억 (2020)",
  sceenImageSrcList: [
    "/film_4/1.jpeg",
    "/film_4/2.jpeg",
    "/film_4/3.jpeg",
    "/film_4/4.jpeg",
    "/film_4/5.jpeg",
    "/film_4/6.jpeg",
    "/film_4/7.jpeg",
    "/film_4/8.jpeg",
    "/film_4/9.jpeg",
    "/film_4/10.jpeg",
    "/film_4/11.jpeg",
    "/film_4/12.jpeg",
    "/film_4/13.jpeg",
    "/film_4/14.jpeg",
    "/film_4/15.jpeg",
    "/film_4/16.jpeg",
  ],
};

const film_5_data = {
  title: "출장 (2019)",
  sceenImageSrcList: [
    "/film_5/1.jpeg",
    "/film_5/2.jpeg",
    "/film_5/3.jpeg",
    "/film_5/4.jpeg",
    "/film_5/5.jpeg",
    "/film_5/6.jpeg",
    "/film_5/7.jpeg",
    "/film_5/8.jpeg",
    "/film_5/9.jpeg",
    "/film_5/10.jpeg",
    "/film_5/11.jpeg",
    "/film_5/12.jpeg",
    "/film_5/13.jpeg",
    "/film_5/14.jpeg",
    "/film_5/15.jpeg",
    "/film_5/16.jpeg",
  ],
};

const filmDataList: FilmDataType[] = [
  film_1_data,
  film_2_data,
  film_3_data,
  film_4_data,
  film_5_data,
];

export const getFilmData = (id: number) => {
  return filmDataList[id - 1];
};
