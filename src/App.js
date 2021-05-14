import { useMediaQuery } from "react-responsive";
import Login from "./pages/login";
import Shows from "./pages/shows";
import "./App.css";
import Header from "./modules/header";
import Footer from "./modules/footer";
import { useRoutes } from "hookrouter";

function App() {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-device-width: 1024px)",
  // });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: "(max-device-width: 1224px)",
  // });
  const routes = {
    "/": () => <Login isTabletOrMobile={isTabletOrMobile} />,
    "/shows": () => <Shows />,
  };

  console.log(window.location.pathname);
  const routeResults = useRoutes(routes);

  const pathName = window.location.pathname;

  return (
    <div className="App">
      {pathName !== "/shows" && <Header isTabletOrMobile={isTabletOrMobile} />}
      {routeResults}
      <Footer isTabletOrMobile={isTabletOrMobile} />
    </div>
  );
}

export default App;
