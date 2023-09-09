import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home/Home";
import { scrollToTop } from "../utils/scrollToTop";
import Juegos from "../pages/juegos/Juegos";
import GameDetailPanel from "../components/gameDetailPanel/GameDetailPanel";
import Cart from "../pages/cart/Cart";
import Auth from "../pages/auth/Auth";

const RoutesOfDOM = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/juegos" element={<Juegos />} />
      <Route path="/juegos/:juegoIdParam" element={<GameDetailPanel />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default RoutesOfDOM;
