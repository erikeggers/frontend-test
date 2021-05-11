import React from 'react';
import styled from 'styled-components';
import Input from './input'

const Form = () => {
 return (
  <>
    <FormHeader>Login</FormHeader>
    <StyledForm>
      <Input name="Email Address" type="email"/>
      <Input name="Password" type="password"/>
    </StyledForm>
  </>
 )
};
 

const StyledForm = styled.form`
  max-width: 567px;
`

const FormHeader = styled.div`
  margin-bottom: 40px;
  font-size: 20px;
  text-align: center;
`

 
export default Form;