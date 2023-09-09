import { useSelector } from "react-redux";
import { RootStateType } from "../../../redux/store";
import styled from "styled-components";

const ButtonStyledSignIn = styled.button`
  padding: 10px 25px;
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  transition: all 0.2s;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;

const ButtonSignIn = () => {
  const form = useSelector((state: RootStateType) => state.authSlice.toggleForm);

  return (
    <ButtonStyledSignIn type="submit">
      {form === true ? "Registrar" : "Iniciar sesión"}
    </ButtonStyledSignIn>
  );
};

export default ButtonSignIn;
