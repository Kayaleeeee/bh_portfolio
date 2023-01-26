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
        "mobile/1.webp",
        "mobile/2.webp",
        "mobile/3.webp",
        "mobile/4.webp",
        "mobile/5.webp",
        "mobile/6.webp",
        "mobile/7.webp",
        "mobile/8.webp",
      ];
    }
    return [
      "1.webp",
      "2.webp",
      "3.png",
      "4.png",
      "5.webp",
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
