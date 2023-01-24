import styled from "styled-components";
import { getVimeoVideo } from "apis/vimeo";
import { PageContainer } from "components/PageContainer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Device } from "utils/viewPort";

export const CommercialDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (!id) {
      return;
    }

    getVimeoVideo(id).then(({ data }) => {
      setData(data);
    });
  }, [id]);

  return (
    <PageContainer>
      {!data ? (
        <></>
      ) : (
        <Wrapper>
          <VideoTitle>{data.name}</VideoTitle>
          <VimeoEmbed dangerouslySetInnerHTML={{ __html: data.embed.html }} />
          <VideoDescription>{data.description}</VideoDescription>
        </Wrapper>
      )}
    </PageContainer>
  );
};

const VimeoEmbed = styled.div`
  overflow: hidden;

  iframe {
    width: 800px;
    height: 600px;
  }

  @media screen and ${Device.mobile} {
    iframe {
      width: calc(100vw);
      height: 340px;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const VideoTitle = styled.div`
  color: white;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: 700;
  word-break: break-word;

  @media screen and ${Device.mobile} {
    padding: 0 10px;
    font-size: 1rem;
  }
`;

const VideoDescription = styled.div`
  color: white;
  white-space: break-spaces;
  word-break: break-word;

  @media screen and ${Device.mobile} {
    padding: 0 10px;
  }
`;
