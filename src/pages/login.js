import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import Form from "../components/form";
import { ReactComponent as Planet } from "../icons/planet.svg";
import BackgroundImage from "../images/login-background.png";
import Header from "../components/header";

// const isTablet = useMediaQuery({ query: '(max-width: 1224px)' })

const Login = () => {
  // const isMobileDevice = useMediaQuery({
  //   query: "(min-device-width: 480px)",
  // });

  // const isTabletDevice = useMediaQuery({
  //   query: "(min-device-width: 768px)",
  // });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  return (
    <>
      {isDesktop && (
        <>
          <Container side="left" backgroundImage={BackgroundImage}>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
            <ItemsWrapper>
              <PlanetWrapper>
                <Planet className="planet-animation" />
              </PlanetWrapper>
            </ItemsWrapper>
          </Container>
        </>
      )}
      <Container side="right">
        <ItemsWrapper>
          <Form />
        </ItemsWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  border: none;

  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url("${(props) => props.backgroundImage}");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      :before {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(
          to bottom,
          rgba(81, 86, 148, 0.8) 0%,
          rgba(16, 17, 37, 0.8) 100%
        );
      }
    `}

  ${(props) => (props.side === "left" ? "left: 0" : "right: 0;")};
  ${(props) => (props.side === "right" ? "align-items: center" : null)};
`;

const ItemsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 2%;
  left: 2%;
`;

const PlanetWrapper = styled.div`
  .planet-animation {
    animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @keyframes scale-in-center {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
  .planet-animation:hover {
    animation: jello-horizontal 0.9s both;
    @keyframes jello-horizontal {
      0% {
        transform: scale3d(1, 1, 1);
      }
      30% {
        transform: scale3d(1.25, 0.75, 1);
      }
      40% {
        transform: scale3d(0.75, 1.25, 1);
      }
      50% {
        transform: scale3d(1.15, 0.85, 1);
      }
      65% {
        transform: scale3d(0.95, 1.05, 1);
      }
      75% {
        transform: scale3d(1.05, 0.95, 1);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
    }
  }
`;

export default Login;
