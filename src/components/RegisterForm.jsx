import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
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

const RegisterForm = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="User Name"
          name="username"
          id="userName"
          type="text"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && Boolean(errors.username)}
          helperText={touched.username && errors.username}
        />
        <TextField
          label="First Name"
          name="firstName"
          id="firstName"
          type="text"
          variant="outlined"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
        />
        <TextField
          label="Last Name"
          name="lastName"
          id="lastName"
          type="text"
          variant="outlined"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
        />
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Box>
    </Form>
  );
};

export default RegisterForm;
