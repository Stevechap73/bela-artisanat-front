import * as yup from "yup";

// Création de register
export const schemaRegister = yup.object({
  email: yup
    .string()
    .email("email valide")
    .required("Ce champs est obligatoire"),
  password: yup
    .string()
    .matches(/[a-z]/, "Il faut au moins une miniscule")
    .matches(/[A-Z]/, "Il faut au moins une majuscule")
    .matches(/[1-9]/, "Il faut aumoins un chiffre")
    .matches(/[@!?%&]/, "Il faut au moins des caractères spéciaux :  @ ! ? % &")
    .min(8, "Au minimum 8 caractères")
    .required("ce champs est obligatoire"),
  confirmPassword: yup
    .string()
    .matches(/[a-z]/, "Il faut au moins une miniscule")
    .matches(/[A-Z]/, "Il faut au moins une majuscule")
    .matches(/[1-9]/, "Il faut aumoins un chiffre")
    .matches(/[@!?%&]/, "Il faut au moins des caractères spéciaux :  @ ! ? % &")
    .min(8, "Au minimum 8 caractères")
    .required("ce champs est obligatoire"),
  firstName: yup
    .string()
    .required("Ce champs est obligatoire")
    .min(3, "mini : 3 caractères")
    .max(20, "max : 20 caractères"),
  lastName: yup
    .string()
    .required("Ce champs est obligatoire")
    .min(3, "mini : 3 caractères")
    .max(20, "max : 20 caractères"),
  pseudo: yup
    .string()
    .required("Ce champs est obligatoire")
    .min(3, "mini : 3 caractères")
    .max(20, "max : 20 caractères"),
  address: yup
    .string()
    .required("Ce champs est obligatoire")
    .min(3, "mini : 3 caractères")
    .max(150, "max : 150 caractères"),
  phone: yup
    .string()
    .required("Ce champs est obligatoire")
    .min(10, "mini : 10 caractères")
    .max(20, "max : 20 caractères"),
});
