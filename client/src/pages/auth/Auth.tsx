import styled from "styled-components";
import AuthLogin from "../../components/auth/login/AuthLogin";
import AuthRegister from "../../components/auth/register/AuthRegister";
import { RootStateType } from "../../redux/store";
import { useSelector } from "react-redux";

const ContainerMainAuthPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 56px;
`;

const ContainerForm = styled.div`
  width: 50%;
  height: 90vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  @media (max-width: 850px) {
    width: 90%;
  }
`;

const Auth = () => {
  const toggleForm = useSelector((state: RootStateType) => state.authSlice.toggleForm);

  return (
    <ContainerMainAuthPage>
      <ContainerForm>{toggleForm === false ? <AuthLogin /> : <AuthRegister />}</ContainerForm>
    </ContainerMainAuthPage>
  );
};

export default Auth;
