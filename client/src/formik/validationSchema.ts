import * as Yup from "yup";

export const validationSchemaRegister = Yup.object({
  name: Yup.string()
    .min(1, "Nombre muy corto.")
    .max(255, "Nombre muy largo.")
    .required("Campo requerido"),
  surname: Yup.string()
    .min(1, "Apellido muy corto.")
    .max(255, "Apellido muy largo.")
    .required("Campo requerido"),
  email: Yup.string().email("Email incorrecto.").required("Campo requerido."),
  password: Yup.string().required("Campo requerido."),
});

export const validationSchemaLoguin = Yup.object({
  email: Yup.string().email("Email incorrecto.").required("Campo requerido."),
  password: Yup.string().required("Campo requerido."),
});

export const validationSchemaVerify = Yup.object({
  code: Yup.number().min(1000).max(999999).required("Campo requerido."),
  email: Yup.string().email("Email incorrecto.").required("Campo requerido."),
});

export const validationSchemaCheckout = Yup.object({
  nombreDestinatario: Yup.string().min(1).max(255).required("Campo requerido."),
  direccion: Yup.string().min(1).max(255).required("Campo requerido."),
  codigoPostal: Yup.mixed()
    .test("isNumberOrString", "Debe ser un número o una cadena.", function (value) {
      return typeof value === "number" || typeof value === "string";
    })
    .required("Campo requerido."),
  ciudad: Yup.string().min(1).max(255).required("Campo requerido."),
  cellphone: Yup.number().min(1).max(999999999999999).required("Campo requerido."),
});
