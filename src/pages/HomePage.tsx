import Header from "components/Header";
import { ImageTransitor } from "components/ImageTransitor";
import React, { useMemo } from "react";
import { getWidth } from "utils/viewPort";

const HomePage = () => {
  const isMobile = useMemo(() => {
    return getWidth() < 700;
  }, []);

  const imageList = useMemo(() => {
    if (isMobile) {
      return [
        "mobile/1.jpeg",
        "mobile/2.jpeg",
        "mobile/3.jpeg",
        "mobile/4.jpeg",
        "mobile/5.jpeg",
        "mobile/6.jpeg",
        "mobile/7.jpeg",
        "mobile/8.jpeg",
      ];
    }
    return [
      "1.jpeg",
      "2.jpeg",
      "3.png",
      "4.png",
      "5.jpeg",
      "6.png",
      "7.png",
      "8.png",
    ];
  }, [isMobile]);

  return (
    <ImageTransitor imageList={imageList}>
      <Header />
    </ImageTransitor>
  );
};

export default HomePage;
