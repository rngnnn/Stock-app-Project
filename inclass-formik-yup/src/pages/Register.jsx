import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik,Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username:Yup.string().required("Bu alan zorunludur!").min(3,'Username en az 3 karakter olmalıdır!'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Register = () => {

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              "username": "",
              "password": "",
              "email": "",
              "firstName": "",
              "lastName": ""
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {
              ({
                values,//* state
                errors,//* errorState i
                touched, //* focuslanıp focuslanmadığını yakalayan
                handleChange,//* change ecventında çalışacak olan fonksyon
                handleBlur,//* blur eventı yani kullanıcının inputdan ayrıldığında çalışacak olan
                handleSubmit,//* form submit olduğunda
                isSubmitting,//* başlagnıç false, submite tıklanıldığında true
                /* and other goodies */
              }) => (
                <Form>
                  <TextField 
                    name="username"
                    label="Username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && errors.username}
                    helperText={touched.username && errors.username}
                  />
                </Form>
              )
            }
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color:"secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

    <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
