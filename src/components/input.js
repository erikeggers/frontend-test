import React from 'react';
import styled from 'styled-components';

const Input = ({name, type}) => {
 return (
  <>
    <StyledLabel for={name}>{name}</StyledLabel>
    <StyledInput type={type} id={name}/>
  </>
 )
};
 
const StyledLabel = styled.label`
  display: block;
  text-transform: uppercase;
  margin-bottom: 40px;
`

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #CCCCCC;
`
 
export default Input;