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
