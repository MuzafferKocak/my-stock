import { object, string } from "yup";
import { Form } from "formik";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";

export const loginSchema = object({
  email: string()
    .email("geben Sie ein Gültiges E-mail")
    .required("E-mail ist erforderlich"),
  password: string()
    .required("Passwort ist erforderlich")
    .min(8, "Passwort muss min. 8 zeichen lang sein")
    .max(16, "Paswort muss max. 16 zeichen lang sein")
    .matches(/\d+/, "Passwort muss ein Zahl haben")
    .matches(/[a-z]+/, "Passwort muss ein klein buchstaben haben")
    .matches(/[A-Z]+/, "Passwort muss ein gross buchstaben haben")
    .matches(/[@$!%*?&]+/, "Passwort muss ein Sonderzeichen(@$!%*?&) haben"),
});

const LoginForm = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
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
          gap: 2,
        }}
      >
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
          variant="contained"
          type="submit"
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

export default LoginForm;
