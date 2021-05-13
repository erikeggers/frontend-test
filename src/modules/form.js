import styled from "styled-components";
import Input from "../components/input";
import Button from "../components/button";
import Checkbox from "../components/checkbox";
import Link from "../components/link";

const Form = () => {
  return (
    <>
      <FormHeader>Log in</FormHeader>
      <StyledForm>
        <Input name="Email Address" type="email" className="form-input-email" />
        <Input
          name="Password"
          type="password"
          className="form-input-password"
        />
        <FormFooter>
          <Checkbox type="remember-me" text="remember me" />
          <Link whereTo="#" text="Forgot Password?" />
        </FormFooter>
        <ButtonWrapper>
          <Button text="Cancel" type="secondary" />
          <Button text="Login" type="primary" />
        </ButtonWrapper>
        <SignUpWrapper>
          <span>Don't have an account yet?</span>
          <Link whereTo="#" text="Sign Up Here" />
        </SignUpWrapper>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 400px;
  min-width: 400px;
  .form-input-email {
    margin: 0 0 40px 0;
  }
  .form-input-password {
    margin: 0 0 10px 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 47px;
`;

const SignUpWrapper = styled.div`
  margin-top: 8px;
  text-align: end;
  span {
    font-weight: 300;
    margin-right: 20px;
  }
`;

const FormHeader = styled.div`
  margin-bottom: 50px;
  font-size: 20px;
  text-align: center;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Form;
