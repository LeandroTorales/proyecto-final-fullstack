import { Formik, useFormik } from "formik";
import React from "react";
import { toggleFormAction } from "../../../redux/slices/auth/authSlice";
import { dispatchType } from "../../../redux/store/index";
import { useDispatch } from "react-redux";
import LineDivisory from "../components/LineDivisory";
import styled from "styled-components";
import Input from "../components/Input";
import { initialValuesLogin } from "../../../formik/initialValues";
import { validationSchemaLoguin } from "../../../formik/validationSchema";
import ContainerFormField from "../components/ContainerFormField";
import ButtonSignIn from "../components/ButtonSignIn";

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    p {
      font-size: 1.2rem;
      button {
        margin-left: 10px;
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
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
  const dispatch = useDispatch<dispatchType>();

  const formik = useFormik({
    initialValues: initialValuesLogin,
    validationSchema: validationSchemaLoguin,
    onSubmit: async (values, actions) => {
      console.log(values);
      return;
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
        <ButtonSignIn />

        <div className="wrapper">
          <LineDivisory />
          <p>
            ¿Ya estás registrado?
            <button onClick={() => dispatch(toggleFormAction())}>
              Inicia sesion haciendo click aquí.
            </button>
          </p>
        </div>
      </Form>
    </>
  );
};

export default AuthLogin;
