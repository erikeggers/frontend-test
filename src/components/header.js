import styled from 'styled-components';

const Logo = () => {
 return (
  <Wrapper>
    <a href="/">LOGO</a>
  </Wrapper>
 )
};

const Wrapper = styled.header`
  display: flex;
  height: 80px;
  width: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  background-color: #1A1B35;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
  }
`
 
export default Logo;