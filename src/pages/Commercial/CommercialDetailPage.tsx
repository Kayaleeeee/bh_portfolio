import styled from "styled-components";
import { getVimeoVideo } from "apis/vimeo";
import { PageContainer } from "components/PageContainer";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Device } from "utils/viewPort";
import { SAMSNUNG_MAIN_ID, SAMSUNG_FILTER_LIST } from "./CommercialListPage";

export const CommercialDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>();
  const [samsungDataList, setSamsungDataList] = useState<any>([]);

  const isSamsungMain = useMemo(() => {
    if (!id) return false;
    return id.toString() === SAMSNUNG_MAIN_ID;
  }, [id]);

  const fetchVideoData = async (id: string) => {
    try {
      const { data } = await getVimeoVideo(id);
      setData(data);
    } catch (e) {
      console.log(e);
      setData(null);
    }
  };

  const fetchSamsungList = async () => {
    const dataList = await Promise.all(
      SAMSUNG_FILTER_LIST.map(async (id) => {
        const { data } = await getVimeoVideo(id);
        return data;
      })
    );

    setSamsungDataList(dataList);
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    if (isSamsungMain) {
      fetchSamsungList();
    }

    fetchVideoData(id);
  }, [id]);

  return (
    <PageContainer>
      {!data ? (
        <></>
      ) : (
        <>
          <Wrapper>
            <VideoTitle>
              {isSamsungMain ? "SAMSUNG Galaxy Buds3" : data.name}
            </VideoTitle>
            <VimeoEmbed dangerouslySetInnerHTML={{ __html: data.embed.html }} />

            {!isSamsungMain && (
              <VideoDescription>{data.description}</VideoDescription>
            )}
          </Wrapper>
          {samsungDataList.length > 0 && (
            <div>
              {samsungDataList.map((data) => {
                return (
                  <Wrapper
                    key={data.name}
                    style={{
                      marginTop: "4rem",
                    }}
                  >
                    <VimeoEmbed
                      dangerouslySetInnerHTML={{ __html: data.embed.html }}
                    />
                  </Wrapper>
                );
              })}
              <VideoDescription>{data.description || ""}</VideoDescription>
            </div>
          )}
        </>
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
