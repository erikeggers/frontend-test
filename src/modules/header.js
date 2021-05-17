import styled, { css } from "styled-components";

const Header = ({ isTablet, isMobile }) => {
  return (
    <Wrapper isTablet={isTablet} isMobile={isMobile}>
      <a href="/">LOGO</a>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: absolute;
  background-color: ${(props) => (props.isMobile ? "#222222" : "#1A1B35")};
  ${({ isTablet }) =>
    isTablet
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
