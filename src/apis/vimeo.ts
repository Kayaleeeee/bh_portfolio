import axios from "axios";

const VIMEO_BASE_URL = "https://api.vimeo.com";
const VIMEO_CHANNEL_ID = 1829310;

export const VIMEO_AUTH_TOKEON = `2c3e2418f9bb7808fcfe3b393a64b8ee`;

export const getVimeoDataList = (searchParams: {
  per_page: number;
  page: number;
}) => {
  return axios
    .create({
      headers: { Authorization: `bearer ${VIMEO_AUTH_TOKEON}` },
    })
    .get(
      `${VIMEO_BASE_URL}/channels/${VIMEO_CHANNEL_ID}/videos?per_page=${searchParams.per_page}&page=${searchParams.page}`
    );
};

export const getVimeoVideo = (videoId: string) => {
  return axios
    .create({
      headers: { Authorization: `bearer ${VIMEO_AUTH_TOKEON}` },
    })
    .get(`${VIMEO_BASE_URL}/channels/${VIMEO_CHANNEL_ID}/videos/${videoId}`);
};
