import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/stack.jpg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik} from "formik";
import { object, string } from "yup";
// import { login } from "../services/apiRequest";
import useApiRequest from "../services/useApiRequest";

const Login = () => {
  const { login } = useApiRequest();
  const loginSchema = object({
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

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 1 }}>
        <Typography variant="h3" color="primary" align="center">
          MY STOCK
        </Typography>
      </Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row-reverse"
        spacing={3}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 45,
              height: 45,
            }}
          >
            <LockIcon />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={3}
            color="secondary.light"
          >
            Login
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              isSubmitting,
              handleSubmit,
            }) => (
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ width: "450px", maxWidth: "500px", m: "auto" }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
              </Box>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={image}
              alt="stack"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
