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
        .finally(() => setIsLoading(false));
    },
    [portfolioList]
  );

  return (
    <PageContainer>
      <InfiniteScroll
        isLast={isLast}
        fetchMore={() => {
          if (!isLoading) fetchMore(searchParams);
        }}
      >
        <VideoList>
          {portfolioList.map((portfolio) => {
            const videoId: number = portfolio.uri.replace("/videos/", "");
            return (
              <VideoThumnail
                key={portfolio.name}
                onClick={() => onClickThumnail(videoId)}
                src={portfolio.pictures.sizes[3].link}
              />
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

const VideoThumnail = styled.img`
  width: 100%;
  max-width: 500px;
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

const LoaderWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
