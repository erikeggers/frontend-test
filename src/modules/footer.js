import styled from "styled-components";
import Link from "../components/link"

const Footer = ({ isTabletOrMobile }) => {
  return (
    <Wrapper isTabletOrMobile={isTabletOrMobile}>
      <LinkContainer>
      <Link whereTo="/" text="Terms of Services" color="#FFF" noUnderline={true}/>
      <Link whereTo="/" text="Contact Us" color="#FFF" noUnderline={true}/>
      </LinkContainer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 16px 20px;
  height: 50px;
  width: 100%;
  background-color: #1a1b35;
  align-items: center;
  a {
    margin-right: 20px; 
  }
`;

const LinkContainer = styled.div`
  display: flex;

`
export default Footer;
