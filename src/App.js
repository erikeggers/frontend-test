import { useMediaQuery } from "react-responsive";
import Login from "./pages/login";
import Shows from "./pages/shows";
import "./App.css";
import Header from "./modules/header";
import Footer from "./modules/footer";
import { useRoutes } from "hookrouter";

function App() {
  // Media Queries
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });

  // Routes
  const routes = {
    "/": () => <Login isTablet={isTablet} />,
    "/shows": () => <Shows />,
  };

  const routeResults = useRoutes(routes);

  const pathName = window.location.pathname;

  return (
    <div className="App">
      {pathName !== "/shows" && (
        <Header isTablet={isTablet} isMobile={isMobile} />
      )}
      {routeResults}
      <Footer isMobile={isMobile} />
    </div>
  );
}

export default App;
