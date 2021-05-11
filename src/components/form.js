import styled from 'styled-components';
import Input from './input'

const Form = () => {
 return (
  <Wrapper>
    <FormHeader>Login</FormHeader>
    <StyledForm>
      <Input name="Email Address" type="email"/>
      <Input name="Password" type="password"/>
    </StyledForm>
  </Wrapper>
 )
};
 

const Wrapper = styled.div`
  width: 567px;
`

const StyledForm = styled.form`
  max-width: 567px;
`

const FormHeader = styled.div`
  margin-bottom: 40px;
  font-size: 20px;
  text-align: center;
`

 
export default Form;