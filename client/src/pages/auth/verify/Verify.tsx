import { useFormik } from "formik";
import styled from "styled-components";
import { initialValuesVerify } from "../../../formik/initialValues";
import { validationSchemaVerify } from "../../../formik/validationSchema";
import { useDispatch } from "react-redux";
import { dispatchType } from "../../../redux/store";
import { authVerify } from "../../../axios/auth/authVerify";
import { toggleFormAction } from "../../../redux/slices/auth/authSlice";
import { useNavigate } from "react-router";
import { useState } from "react";

const ContainerMainVerify = styled.div`
  height: 100vh;
  padding-top: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 500;
  }
  div {
    height: 90%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: white;
    color: black;
    padding: 25px;
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 90%;
      width: 100%;
      gap: 50px;
      font-weight: 500;
      text-align: center;
      font-size: 1.2rem;
      input {
        padding: 10px 20px;
        text-align: center;
        width: 500px;
        font-size: 1.2rem;
      }
      input {
        -webkit-appearance: none;
        appearance: none;
      }

      button {
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
      }
    }
  }
  @media (max-width: 850px) {
    div {
      form {
        input {
          padding: 10px 5px;
          text-align: center;
          width: 260px;
          font-size: 0.8rem;
        }
      }
    }
  }
`;

const Verify = () => {
  const dispatch = useDispatch<dispatchType>();
  const navigate = useNavigate();
  const [isError, setIsError] = useState<Error | null>(null);

  const formik = useFormik({
    initialValues: initialValuesVerify,
    validationSchema: validationSchemaVerify,
    onSubmit: async (values, actions) => {
      const { email, code } = values;
      const newCode = Number(code);
      const userVerify = await authVerify({ email, newCode }).catch((error) => setIsError(error));
      if (userVerify) {
        actions.resetForm();
        dispatch(toggleFormAction());
        alert(
          "Te haz verificado correctamente, te estamos redirigiendo a la pagina de logueo de usuarios."
        );
        return setTimeout(() => {
          navigate("/profile");
        }, 1000);
      }
    },
  });

  const limitarCifras = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    const valorNumerico = valor.replace(/[^0-9]/g, "");
    const valorLimitado = valorNumerico.substring(0, 6);
    e.target.value = valorLimitado;
  };

  return (
    <ContainerMainVerify>
      <div>
        <h2>Verificación de código.</h2>
        <form onSubmit={formik.handleSubmit}>
          <p>
            Te hemos enviado un código de verifación a tu casilla de correos. Por favor, brindanos
            el código para que podamos verificar tu Usuario.
          </p>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="number"
            placeholder="Código"
            name="code"
            value={formik.values.code}
            onChange={(e) => {
              limitarCifras(e);
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
          />
          <button type="submit">Enviar código</button>
        </form>
        {isError !== null ? <h4>{isError.message}</h4> : null}
      </div>
    </ContainerMainVerify>
  );
};

export default Verify;
