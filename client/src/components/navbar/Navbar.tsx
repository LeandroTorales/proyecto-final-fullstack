import styled from "styled-components";
import ItemOfNavbar from "./ItemOfNavbar";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType, dispatchType } from "../../redux/store";
import { toggleMenu } from "../../redux/slices/toggleMenuSlice";

const ContainerMain = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  background-color: #e9e9e9;
  position: fixed;
  z-index: 9999;
  .logoMain {
    font-size: 30px;
    text-align: center;
    font-style: italic;
    font-weight: 500;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 30px;
    font-size: 20px;
    font-weight: 500;
    height: 100%;
    transition: all 0.5s;
    @media (max-width: 768px) {
      display: flex;
      position: absolute;
      top: 56px;
      left: -2000px;
      width: 100%;
      height: calc(100vh - 56px);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
      background-color: #e9e9e9;
      font-size: 30px;
    }
  }
  .active {
    top: 56px;
    left: 0px;
  }

  svg {
    font-size: 30px;
    :active {
      color: #000000;
    }
  }

  a {
    display: flex;
    height: 100%;
    padding: 5px 10px;
    align-items: center;
    justify-content: center;
    border: 1px solid #e9e9e9;
    @media (max-width: 768px) {
      height: 56px;
      width: 160px;
    }
  }

  a:active {
    color: #363636;
    cursor: default;
  }
  a:hover {
    border: 1px solid grey;
    border-radius: 8px;
  }
  a:visited {
    color: #000000;
  }

  .logoBarsHamburguesa {
    display: none;
    :hover {
      cursor: pointer;
    }
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Navbar = () => {
  const stateActiveMenu = useSelector((state: RootStateType) => state.toggleMenuSlice.activeMenu);
  const isCurrentUser = useSelector((state: RootStateType) => state.authSlice.currentUser);
  const dispatch = useDispatch<dispatchType>();

  return (
    <ContainerMain>
      <NavLink
        className="logoMain"
        to="/"
        onClick={() =>
          setTimeout(() => {
            dispatch(toggleMenu());
          }, 500)
        }
      >
        GameMarket
      </NavLink>
      <ul className={`${stateActiveMenu ? "active" : ""}`}>
        <ItemOfNavbar to="/">Home</ItemOfNavbar>
        <ItemOfNavbar to="/juegos">Juegos</ItemOfNavbar>
        {isCurrentUser === undefined ? (
          <ItemOfNavbar to="/auth" icon={<AiOutlineUser />} />
        ) : (
          <ItemOfNavbar to="/profile">{isCurrentUser.usuario.nombre}</ItemOfNavbar>
        )}
        <ItemOfNavbar to="/cart" icon={<AiOutlineShoppingCart />} />
      </ul>
      <FaBars className="logoBarsHamburguesa" onClick={() => dispatch(toggleMenu())}></FaBars>
    </ContainerMain>
  );
};

export default Navbar;
