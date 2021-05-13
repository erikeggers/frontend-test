import styled, {css} from "styled-components";

const Header = ({isTabletOrMobile}) => {
  return (
    <Wrapper isTabletOrMobile={isTabletOrMobile}>
      <a href="/">LOGO</a>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: absolute;
  background-color: #1A1B35;
  ${({ isTabletOrMobile }) =>
    isTabletOrMobile
      ? css`
          padding: 12px;
          height: 50px;
          width: 100%;
        `
      : css`
          z-index: 1;
          top: 10px;
          left: 10px;
          display: flex;
          height: 80px;
          width: 80px;
          justify-content: center;
          align-items: center;
          border-radius: 13px;
        `}
  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
  }
`;

export default Header;
