import styled from "styled-components";

const Checkbox = ({ type, text }) => {
  return (
    <Wrapper>
      <input type="checkbox" id={type} name={type} value={type} />
      <StyledLabel htmlFor={type}> {text}</StyledLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 12px;
  margin-left: 11px;
  padding-top: 2px;
`;

export default Checkbox;
