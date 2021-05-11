import styled from 'styled-components';

const Link = ({whereTo, text}) => {
 return (
   <StyledLink href={whereTo}>{text}</StyledLink>
 )
};
 
const StyledLink = styled.a`
  color: rgba(0,0,0,0.87);
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 14px;
`
 
export default Link;