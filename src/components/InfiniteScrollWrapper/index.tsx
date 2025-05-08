import { Loader } from "components/Loader";
import React, { useEffect, useRef } from "react";
import { HTMLAttributes } from "react";
import styled from "styled-components";

type Props = {
  fetchMore: () => void;
  isLast: boolean;
  isLoading: boolean;
} & HTMLAttributes<HTMLDivElement>;

const InfiniteScroll = ({
  fetchMore,
  children,
  isLast,
  isLoading,
  ...props
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;
    const intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting && !isLast && !isLoading) {
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
  }, [ref, fetchMore, isLast, isLoading]);

  return (
    <Wrapper {...props}>
      {children}
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLast && !isLoading && <ScrollTrigger ref={ref} />}
    </Wrapper>
  );
};

export default InfiniteScroll;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ScrollTrigger = styled.div`
  width: 100%;
  height: 50px;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
