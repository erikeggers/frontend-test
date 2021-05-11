import styled from "styled-components";
import Form from "./components/form";

function Login() {
  return (
    <>
      <Container side="left"></Container>
      <Container side="right">
        <ItemsWrapper>
          <Form />
        </ItemsWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  ${(props) => (props.side === "left" ? "left: 0" : "right: 0;")};
  ${(props) => (props.side === "left" ? "background-color: blue" : null)};
  ${(props) => (props.side === "right" ? "align-items: center" : null)};
`;

const ItemsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Login;
