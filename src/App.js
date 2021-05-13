import { useMediaQuery } from "react-responsive";
import Login from "./pages/login";
import "./App.css";
import Header from "./modules/header"
import Footer from "./modules/footer"

function App() {
    // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-device-width: 1024px)",
  // });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: "(max-device-width: 1224px)",
  // });

  return (
    <div className="App">
      <Header isTabletOrMobile={isTabletOrMobile}/>
      <Login isTabletOrMobile={isTabletOrMobile}/>
      <Footer isTabletOrMobile={isTabletOrMobile}/>
    </div>
  );
}

export default App;
