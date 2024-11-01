import { object, string } from "yup";

export const registerSchema = object({
  username: string()
    .max(20, "Benutzername muss weniger als 10 Zeichen lang sein.")
    .required("Benutzername ist erforderlich"),
  firstName: string()
    .max(20, "Name muss weniger als 20 Zeichen lang sein.")
    .required("Name ist erforderlich"),
  lastName: string()
    .max(20, "Nachname muss weniger als 20 Zeichen lang sein.")
    .required("Nachname ist erforderlich"),
  email: string("geben Sie ein Gültiges E-mail").required(
    "E-mail ist erforderlich"
  ),
  password: string()
    .required("Passwort ist erforderlich")
    .min(8, "Passwort muss min. 8 zeichen lang sein")
    .max(16, "Paswort muss max. 16 zeichen lang sein")
    .matches(/\d+/, "Passwort muss ein Zahl haben")
    .matches(/[a-z]/, "Passwort muss ein klein buchstaben haben")
    .matches(/[A-Z]/, "Passwort muss ein gross buchstaben haben")
    .matches(/[@$!%*?&]/, "Passwort muss ein Sonderzeichen(@$!%*?&) haben"),
});

const RegisterForm = () => {
  return <div>RegisterForm</div>;
};

export default RegisterForm;
