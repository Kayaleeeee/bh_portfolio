import { PageContainer } from "components/PageContainer";
import React from "react";
import styled from "styled-components";
import { Device } from "utils/viewPort";

const YoutubeIcon = require("images/youtube-color-icon.svg").ReactComponent;
const VimeoIcon = require("images/vimeo-square-icon.svg").ReactComponent;
const InstagramIcon = require("images/instagram-icon.svg").ReactComponent;

const ContactPage = () => {
  return (
    <PageContainer>
      <CenterContainer>
        <NameContanier>
          <h3>Min Byeong Hwy</h3>
          <h1>민병휘</h1>
        </NameContanier>
        <IconContainer>
          <Link
            href="https://www.youtube.com/playlist?list=PLDBkvfvnit_xLQORwAQ5d12sQd4Y49FgO"
            target="_blank"
          >
            <YoutubeIcon
              style={{
                width: "50px",
                fill: "#fff",
                filter: "brightness(0) invert(1)",
              }}
            />
          </Link>
          <Link href="https://vimeo.com/user192123038" target="_blank">
            <VimeoIcon style={{ width: "40px", fill: "#fff" }} />
          </Link>
          <Link href="https://www.instagram.com/minbyeonghwi/" target="_blank">
            <InstagramIcon style={{ width: "40px", fill: "#fff" }} />
          </Link>
        </IconContainer>
        <Email>alsqudgnl@naver.com</Email>
        <Phone>010-3053-6549</Phone>
        <ProfileImage src={require("images/profile-picture.jpeg")} />
      </CenterContainer>
    </PageContainer>
  );
};

export default ContactPage;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const NameContanier = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-top: 3rem;

  h1 {
    margin: 0;
    font-size: 7rem;
  }

  h3 {
    margin: 0;
    text-decoration: underline;
  }

  @media screen and ${Device.mobile} {
    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;

const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Link = styled.a`
  text-decoration: none;
  margin: 0 15px;
`;

const ProfileImage = styled.img`
  width: 100%;
`;

const Email = styled.div`
  font-size: 2rem;

  @media screen and ${Device.mobile} {
    font-size: 1rem;
  }
`;

const Phone = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media screen and ${Device.mobile} {
    font-size: 1rem;
  }
`;
