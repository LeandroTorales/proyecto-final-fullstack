import styled from "styled-components";
import pngProfile from "../../images/profile-png.png";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType, dispatchType } from "../../redux/store";
import { logoutAction } from "../../redux/slices/auth/authSlice";
import { useNavigate } from "react-router-dom";

const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  height: 100%;
  color: black;
  padding: 10px;
  gap: 10px;
  width: 200px;
  img {
    width: 175px;
    height: auto;
  }
  button {
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 10px 15px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

const ProfileUser = () => {
  const currentUser = useSelector((state: RootStateType) => state.authSlice.currentUser);
  const dispatch = useDispatch<dispatchType>();
  const navigate = useNavigate();

  return (
    <>
      {currentUser === undefined ? null : (
        <ContainerUser>
          <img src={pngProfile} alt="Imagen foto de perfil" />
          <span>{currentUser.usuario.nombre}</span>
          <span>{currentUser.usuario.email}</span>

          <button
            type="button"
            onClick={() => {
              alert("Haz cerrado sesión");
              return setTimeout(() => {
                dispatch(logoutAction());
                navigate("/");
              }, 1000);
            }}
          >
            Cerrar sesión
          </button>
        </ContainerUser>
      )}
    </>
  );
};

export default ProfileUser;
