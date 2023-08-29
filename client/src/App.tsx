import RoutesOfDOM from "./routes/RoutesOfDOM";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./utils/GlobalStyles";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <RoutesOfDOM />
      <Footer />
    </>
  );
};

export default App;
