import styled from "styled-components";

const Link = ({ whereTo, text, color, noUnderline }) => {
  return (
    <StyledLink
      href={whereTo}
      color={color}
      noUnderline={noUnderline}
    >
      {text}
    </StyledLink>
  );
};

const StyledLink = styled.a`
  color: ${(props) => (props.color ? props.color : "rgba(0,0,0,0.87)")};
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 14px;
  ${(props) => (props.noUnderline ? "text-decoration: none" : null)};
`;

export default Link;
