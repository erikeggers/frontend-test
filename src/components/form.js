import styled from 'styled-components';
import Input from './input'
import Button from './button'
import Checkbox from './checkbox'

const Form = () => {
 return (
  <Wrapper>
    <FormHeader>Log in</FormHeader>
    <StyledForm>
      <Input name="Email Address" type="email" className="form-input-email"/>
      <Input name="Password" type="password" className="form-input-password"/>
      <FormFooter>
        <Checkbox type="remember-me" text="remember me"/>
        <a href="#">Forgot Password?</a>
      </FormFooter>
      <ButtonWrapper>
        <Button text="Cancel" type="secondary"/>
        <Button text="Login" type="primary"/>
    </ButtonWrapper>
    </StyledForm>
  </Wrapper>
 )
};
 

const Wrapper = styled.div`
  width: 100%;
`

const StyledForm = styled.form`
  max-width: 400px;
  min-width: 400px;
  .form-input-email {
    margin: 0 0 40px 0;
  }
  .form-input-password {
    margin: 0 0 10px 0;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 47px;
`

const FormHeader = styled.div`
  margin-bottom: 50px;
  font-size: 20px;
  text-align: center;
`

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

 
export default Form;