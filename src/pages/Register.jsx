import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/stack.jpg";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import useApiRequest from "../services/useApiRequest";
import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/RegisterForm";

const Register = () => {
  const { register } = useApiRequest();

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 1, p: 1 }}>
        <Typography variant="h3" color="primary" align="center">
          MY STOCK
        </Typography>
      </Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row-reverse"
        spacing={2}
        sx={{
          height: "100%",
          
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
            mb={1}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting();
            }}
            // component={(props) =>}
          >
            {(formikProps) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
              >
                <RegisterForm {...formikProps} />
              </Box>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <img
              src={image}
              alt="stock"
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

export default Register;
