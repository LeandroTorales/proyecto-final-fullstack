import { useSelector } from "react-redux";
import { RootStateType } from "../../../redux/store";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";

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

interface Props {
  spinner: boolean;
}

const ButtonSignIn = ({ spinner }: Props) => {
  const form = useSelector((state: RootStateType) => state.authSlice.toggleForm);

  return (
    <ButtonStyledSignIn type="submit">
      {form === true ? (
        spinner === true ? (
          <ClipLoader color={"#000000"} loading={spinner} size={20} aria-label="Loading Spinner" />
        ) : (
          "registrar"
        )
      ) : spinner === true ? (
        <ClipLoader color={"#000000"} loading={spinner} size={20} aria-label="Loading Spinner" />
      ) : (
        "Iniciar sesión"
      )}
    </ButtonStyledSignIn>
  );
};

export default ButtonSignIn;
