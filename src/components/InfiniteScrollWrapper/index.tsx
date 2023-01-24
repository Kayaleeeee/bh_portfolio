import React, { useEffect, useRef } from "react";
import { HTMLAttributes } from "react";
import styled from "styled-components";

type Props = {
  fetchMore: () => void;
  isLast: boolean;
} & HTMLAttributes<HTMLDivElement>;

const InfiniteScroll = ({ fetchMore, children, isLast, ...props }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;
    const intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting && !isLast) {
            fetchMore();
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (intersectionObserver && target) {
      intersectionObserver.observe(target);
    }

    return () => {
      if (intersectionObserver && target) {
        intersectionObserver.unobserve(target);
      }
    };
  }, [ref, fetchMore, isLast]);

  return (
    <Wrapper {...props}>
      {children}
      {!isLast && <ScrollTriger ref={ref} />}
    </Wrapper>
  );
};

export default InfiniteScroll;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ScrollTriger = styled.div`
  width: 100%;
  height: 50px;
`;
