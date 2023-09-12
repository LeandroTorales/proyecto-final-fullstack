import { useFormik } from "formik";
import { setDataUserAction, toggleFormAction } from "../../../redux/slices/auth/authSlice";
import { dispatchType } from "../../../redux/store/index";
import { useDispatch } from "react-redux";
import LineDivisory from "../components/LineDivisory";
import styled from "styled-components";
import Input from "../components/Input";
import { initialValuesLogin } from "../../../formik/initialValues";
import { validationSchemaLoguin } from "../../../formik/validationSchema";
import ContainerFormField from "../components/ContainerFormField";
import ButtonSignIn from "../components/ButtonSignIn";
import { authLogin } from "../../../axios/auth/authLogin";
import { useNavigate } from "react-router";
import { useState } from "react";

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
  text-align: center;
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    p {
      font-size: 1.2rem;
      text-align: center;
      button {
        margin-left: 10px;
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        text-decoration: underline;
        &:active {
          color: blue;
        }
      }
    }
  }
  .wrapper:last-of-type {
    margin-top: 15px;
  }
`;

const AuthLogin = () => {
  const [spinnerBoolean, setSpinnerBoolean] = useState(false);
  const [isError, setIsError] = useState<Error | null>(null);
  const dispatch = useDispatch<dispatchType>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValuesLogin,
    validationSchema: validationSchemaLoguin,
    onSubmit: async (values, actions) => {
      const { email, password } = values;
      setSpinnerBoolean(true);
      const user = await authLogin({ email, password }).catch((error) => {
        setIsError(error);
      });
      if (user) {
        actions.resetForm();
        setSpinnerBoolean(false);
        const { msj, ...userData } = user;
        dispatch(setDataUserAction(userData));
        alert(`Te haz logueado correctamente, bienvenido ${user.usuario.nombre}`);
        return navigate("/profile");
      }
      if (user === undefined) {
        actions.resetForm();
        return setSpinnerBoolean(false);
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <div className="wrapper">
          <h2>Inicio de sesión</h2>
          <LineDivisory />
        </div>

        <ContainerFormField>
          <Input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            nameOfLabel="Email"
            value={formik.values.email}
            isError={formik.touched.email && formik.errors.email}
            errorMessage={formik.errors.email}
            min={1}
            max={255}
          />
          <Input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            nameOfLabel="Contraseña"
            value={formik.values.password}
            isError={formik.touched.password && formik.errors.password}
            errorMessage={formik.errors.password}
            min={1}
            max={255}
          />
        </ContainerFormField>
        {isError !== null ? <h4>{isError.message}</h4> : null}
        <ButtonSignIn spinner={spinnerBoolean} />

        <div className="wrapper">
          <LineDivisory />
          <p>
            ¿No estas registrado?
            <button onClick={() => dispatch(toggleFormAction())}>
              Registrate haciendo click aquí.
            </button>
          </p>
        </div>
      </Form>
    </>
  );
};

export default AuthLogin;
