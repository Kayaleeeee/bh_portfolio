import { Image } from "components/Image";
import React, { useState, useEffect, useMemo, PropsWithChildren } from "react";
import styled from "styled-components";

type Props = {
  imageList: string[];
};
export const ImageTransitor: React.FunctionComponent<
  PropsWithChildren<Props>
> = ({ imageList, children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImageSrc = useMemo(() => {
    return require(`images/home/${imageList[currentImageIndex]}`);
  }, [currentImageIndex, imageList]);

  useEffect(() => {
    setTimeout(() => {
      if (currentImageIndex === imageList.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }, 2500);
  }, [imageList, currentImageIndex]);

  if (imageList.length === 0 || !currentImageSrc) {
    return <></>;
  }

  return (
    <ImageContainer>
      <ChildrenWrapper>{children}</ChildrenWrapper>
      {imageList.map((image, index) => {
        return (
          <HomeImage
            key={image}
            src={require(`images/home/${image}`) || ""}
            srcSet={require(`images/home/${image}`) || ""}
            alt={`home image ${index}`}
            style={{ opacity: currentImageIndex === index ? 1 : 0 }}
          />
        );
      })}
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const ChildrenWrapper = styled.div`
  z-index: 10;
  transition: none;
  position: absolute;
  width: 100%;
  top: 0;
`;

const HomeImage = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;

  -webkit-transition: opacity 2.5s ease-in-out;
  -moz-transition: opacity 2.5s ease-in-out;
  -o-transition: opacity 2.5s ease-in-out;
  transition: opacity 2.5s ease-in-out;
`;
