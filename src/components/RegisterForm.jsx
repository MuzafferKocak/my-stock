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
  isSubmitting,
}) => {
  return (
    <Form>
      <Box
        sx={{
          width: "450px",
          maxWidth: "500px",
          m: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1.5,
        }}
      >
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
          sx={{
            width: "100%",
            maxWidth: "100%",
            "@media (max-width:600px)": {
              width: "70%",
            },
          }}
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
          sx={{
            width: "100%",
            maxWidth: "100%",
            "@media (max-width:600px)": {
              width: "70%",
            },
          }}
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
          sx={{
            width: "100%",
            maxWidth: "100%",
            "@media (max-width:600px)": {
              width: "70%",
            },
          }}
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
          sx={{
            width: "100%",
            maxWidth: "100%",
            "@media (max-width:600px)": {
              width: "70%",
            },
          }}
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
          sx={{
            width: "100%",
            maxWidth: "100%",
            "@media (max-width:600px)": {
              width: "70%",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          sx={{
            mt: 2,
            width: "100%",
            maxWidth: "100%",
            "@media (max-width:600px)": {
              width: "70%",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Form>
  );
};

export default RegisterForm;
