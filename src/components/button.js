import styled from 'styled-components';

const Button = ({type, text}) => {
 return (
  <StyledButton type={type}>
    {text}
  </StyledButton>
 )
};
 
const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  color: #fff;
  font-family: 'Roboto Medium';
  padding: 7px 30px;
  border-radius: 15px;
  text-transform: uppercase;
  background: ${(props) => (props.type === 'primary' ? "linear-gradient(132.06deg, #62419A 0%, #3E76EB 100%)" : "#000")};
  :hover {
    box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);
    background-position: right center;
  }
`



export default Button;