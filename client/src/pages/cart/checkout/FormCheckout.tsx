import styled from "styled-components";
import Input from "../../../components/auth/components/Input";
import { useFormik } from "formik";
import { initialValuesCheckout } from "../../../formik/initialValues";
import { validationSchemaCheckout } from "../../../formik/validationSchema";
import ContainerFormField from "../../../components/auth/components/ContainerFormField";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../../redux/store";
import { InterfaceProductDetails, createOrder } from "../../../axios/orders/createOrder";
import { ProductsInCart } from "../../../redux/slices/products/utils/addProductToCart";
import { useState } from "react";
import { dispatchType } from "../../../redux/store/index";
import { cleanCartAction } from "../../../redux/slices/products/products";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  height: 100vh;
  padding-top: 56px;
  display: flex;
  justify-content: center;
  color: black;
  align-items: center;
  .wrapperInputs {
    background-color: white;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    padding: 10px 40px;
    font-size: 1.1rem;
    border-radius: 10px;
    background-color: #035ba8;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.1s;
  }
  button:active {
    padding: 10px 70px;
  }
`;

const FormCheckout = () => {
  const [error, setError] = useState<Error | null>(null);
  const productsInCart = useSelector((state: RootStateType) => state.productsSlice.productsInCart);
  const currentUser = useSelector((state: RootStateType) => state.authSlice.currentUser);
  const shippingCost = useSelector((state: RootStateType) => state.productsSlice.shippingCost);
  console.log("currentUser:", currentUser);
  const dispatch = useDispatch<dispatchType>();
  const navigate = useNavigate();

  const reOrderProductsInCart = (productsInCart: ProductsInCart[]): InterfaceProductDetails[] => {
    return productsInCart.map((prod) => {
      const { stock, discount, ...producto } = prod;
      return {
        ...producto,
      };
    });
  };

  const formik = useFormik({
    initialValues: initialValuesCheckout,
    validationSchema: validationSchemaCheckout,
    onSubmit: async (values, actions) => {
      const reOrderedProducts = reOrderProductsInCart(productsInCart);
      const userToken = currentUser.token;
      const order = {
        products: reOrderedProducts,
        shippingDetails: values,
        shippingCost: shippingCost,
      };
      const orderPeticion = await createOrder({ userToken, order }).catch((error) =>
        setError(error)
      );
      if (orderPeticion) {
        actions.resetForm();
        dispatch(cleanCartAction());
        navigate("/profile");
        return alert(
          `Haz encargado un pedido, muchas gracias por su compra ${currentUser.usuario.nombre}`
        );
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <ContainerFormField classname={"wrapperInputs"}>
        <Input
          type="text"
          name="nombreDestinatario"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          nameOfLabel="Nombre de destinatario"
          value={formik.values.nombreDestinatario}
          isError={formik.touched.nombreDestinatario && formik.errors.nombreDestinatario}
          errorMessage={formik.errors.nombreDestinatario}
        />
        <Input
          type="text"
          name="direccion"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          nameOfLabel="Dirección"
          value={formik.values.direccion}
          isError={formik.touched.direccion && formik.errors.direccion}
          errorMessage={formik.errors.direccion}
        />
        <Input
          type="text"
          name="codigoPostal"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          nameOfLabel="Código postal"
          value={formik.values.codigoPostal}
          isError={formik.touched.codigoPostal && formik.errors.codigoPostal}
          errorMessage={formik.errors.codigoPostal}
        />
        <Input
          type="text"
          name="ciudad"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          nameOfLabel="Ciudad"
          value={formik.values.ciudad}
          isError={formik.touched.ciudad && formik.errors.ciudad}
          errorMessage={formik.errors.ciudad}
        />
        <Input
          type="number"
          name="cellphone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          nameOfLabel="Numero de telefono"
          value={formik.values.cellphone}
          isError={formik.touched.cellphone && formik.errors.cellphone}
          errorMessage={formik.errors.cellphone}
        />
        {error !== null ? <p>{error.message}</p> : null}
        <button type="submit">Continuar</button>
      </ContainerFormField>
    </Form>
  );
};

export default FormCheckout;
