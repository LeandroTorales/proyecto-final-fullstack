import { useFormik } from "formik";
import { validationSchemaRegister } from "../../../formik/validationSchema";
import { initialValuesRegister } from "../../../formik/initialValues";
import ContainerFormField from "../components/ContainerFormField";
import Input from "../components/Input";
import LineDivisory from "../components/LineDivisory";
import { useDispatch } from "react-redux";
import { dispatchType } from "../../../redux/store";
import { toggleFormAction } from "../../../redux/slices/auth/authSlice";
import styled from "styled-components";
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

const AuthRegister = () => {
  const dispatch = useDispatch<dispatchType>();

  const formik = useFormik({
    initialValues: initialValuesRegister,
    validationSchema: validationSchemaRegister,
    onSubmit: async (values, actions) => {
      console.log(values);
      return;
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <div className="wrapper">
          <h2>Registro de usuario</h2>
          <LineDivisory />
        </div>

        <ContainerFormField>
          <Input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            nameOfLabel="Nombre"
            value={formik.values.name}
            isError={formik.touched.name && formik.errors.name}
            errorMessage={formik.errors.name}
            min={1}
            max={255}
          />
          <Input
            type="text"
            name="surname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            nameOfLabel="Apellido"
            value={formik.values.surname}
            isError={formik.touched.surname && formik.errors.surname}
            errorMessage={formik.errors.surname}
            min={1}
            max={255}
          />
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

export default AuthRegister;
