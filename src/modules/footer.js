import styled from "styled-components";
import Link from "../components/link";
import { ReactComponent as SoundCloud } from "../icons/soundcloud.svg";
import { ReactComponent as Spotify } from "../icons/spotify.svg";
import { ReactComponent as Instagram } from "../icons/instagram.svg";
import { ReactComponent as Twitter } from "../icons/twitter.svg";
import { ReactComponent as Facebook } from "../icons/facebook.svg";

const Footer = ({ isMobile }) => {
  return (
    <Wrapper isMobile={isMobile}>
      <LinkContainer>
        <Link
          whereTo="/"
          text="Terms of Services"
          color="#FFF"
          noUnderline={true}
        />
        <Link whereTo="/" text="Contact Us" color="#FFF" noUnderline={true} />
      </LinkContainer>
      <Icons isMobile={isMobile}>
        <Facebook />
        <Twitter />
        <Instagram />
        <SoundCloud />
        <Spotify />
      </Icons>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  flex-direction: ${(props) => (props.isMobile ? "column" : null)};
  height: ${(props) => (props.isMobile ? "95px" : "50px")};
  justify-content: ${(props) => (!props.isMobile ? "space-between" : null)};
  align-items: ${(props) => (!props.isMobile ? "center" : null)};
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 16px 20px;
  width: 100%;
  background-color: #1a1b35;
  a {
    margin-right: 20px;
  }
`;

const LinkContainer = styled.div`
  a {
    display: inline-block;
  }
`;

const Icons = styled.div`
  margin-top: ${(props) => (props.isMobile ? "20px" : null)};
  display: flex;
  align-items: center;
  svg {
    margin: 0 10px;
  }
  svg:first-of-type {
    margin-left: 0;
  }
`;

export default Footer;
