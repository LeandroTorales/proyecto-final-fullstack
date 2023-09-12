import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home/Home";
import { scrollToTop } from "../utils/scrollToTop";
import Juegos from "../pages/juegos/Juegos";
import GameDetailPanel from "../components/gameDetailPanel/GameDetailPanel";
import Cart from "../pages/cart/Cart";
import Auth from "../pages/auth/Auth";
import Verify from "../pages/auth/verify/Verify";
import Profile from "../pages/profile/Profile";

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
      <Route path="/verify" element={<Verify />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default RoutesOfDOM;
