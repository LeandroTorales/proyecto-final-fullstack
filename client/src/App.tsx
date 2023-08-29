import RoutesOfDOM from "./routes/RoutesOfDOM";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./utils/GlobalStyles";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [first, setfirst] = useState({});
  console.log("first:", first);

  const fetchData = async (): Promise<void> => {
    const fetching = await fetch("/api");
    const data = await fetching.json();
    setfirst(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //BORRAR PRUEBA API

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
