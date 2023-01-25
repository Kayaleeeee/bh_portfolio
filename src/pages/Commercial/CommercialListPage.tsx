import { getVimeoDataList } from "apis/vimeo";
import InfiniteScroll from "components/InfiniteScrollWrapper";
import { Loader } from "components/Loader";
import { PageContainer } from "components/PageContainer";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Device } from "utils/viewPort";

export const CommercialListPage = () => {
  const navigate = useNavigate();
  const [portfolioList, setPortfolioList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const [isLast, setIsLast] = useState(false);
  const [searchParams, setSearchParams] = useState({
    per_page: 6,
    page: 1,
  });

  const onClickThumnail = (id: number) => {
    navigate(`/commercial/${id}`);
  };

  const fetchMore = useCallback(
    (searchParams) => {
      setIsLoading(true);

      getVimeoDataList(searchParams)
        .then(({ data }) => {
          if (data.data.length <= 0 || portfolioList.length >= data.total) {
            setIsLast(true);
          } else {
            setIsLast(false);
            setSearchParams((prev) => ({ ...prev, page: prev.page + 1 }));
          }

          setPortfolioList((prev) => prev.concat(data.data));
        })
        .catch(() => setIsLast(true))
        .finally(() => {
          setIsInitialLoading(false);
          setIsLoading(false);
        });
    },
    [portfolioList]
  );

  return (
    <PageContainer>
      {isInitialLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      <InfiniteScroll
        isLast={isLast}
        isLoading={isLoading && !isInitialLoading}
        fetchMore={() => {
          if (!isLoading) fetchMore(searchParams);
        }}
      >
        <VideoList>
          {portfolioList.map((portfolio) => {
            const videoId: number = portfolio.uri.replace("/videos/", "");
            return (
              <VideoItem
                key={portfolio.name}
                onClick={() => onClickThumnail(videoId)}
              >
                <VideoThumnail src={portfolio.pictures.sizes[0].link} />
                <VideoTitle>{portfolio.name}</VideoTitle>
              </VideoItem>
            );
          })}
        </VideoList>
      </InfiniteScroll>
    </PageContainer>
  );
};

const VideoList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  &:nth-child(odd) {
    margin-right: 3rem;
  }

  @media screen and ${Device.mobile} {
    margin-bottom: 2rem;

    &:nth-child(odd) {
      margin-right: 0rem;
    }
  }
`;

const VideoTitle = styled.div`
  color: white;
  font-size: 1rem;
  margin-top: 1rem;

  @media screen and ${Device.mobile} {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const VideoThumnail = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: calc(500px * 0.56);
  object-fit: cover;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
