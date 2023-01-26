import React, { HTMLAttributes } from "react";

type Props = {
  srcSet: string;
  src: string;
  alt: string;
};

export const Image = ({
  srcSet,
  src,
  alt,
  ...props
}: HTMLAttributes<HTMLPictureElement> & Props) => {
  return (
    <picture {...props}>
      <source srcSet={srcSet} type="image/webp" {...props} />
      <img src={src} alt={alt} {...props} />
    </picture>
  );
};
