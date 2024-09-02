import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required("Bu alan zorunludur!")
    .min(3, "Username en az 3 karakter olmalıdır!"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/\d+/, "Digit karakter içermelidir!")
    .matches(/[a-z]/, "Küçük harf içermelidir!")
    .matches(/[A-Z]/, "Büyük harf içermelidir!")
    .matches(/[@$?!%&*]+/, "Özel karakter içermelidir(@$?!%&*)")
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
              username: "",
              password: "",
              email: "",
              firstName: "",
              lastName: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({
              values, //* state
              errors, //* errorState i
              touched, //* focuslanıp focuslanmadığını yakalayan
              handleChange, //* change ecventında çalışacak olan fonksyon
              handleBlur, //* blur eventı yani kullanıcının inputdan ayrıldığında çalışacak olan
              //handleSubmit, //* form submit olduğunda
              isSubmitting, //* başlagnıç false, submite tıklanıldığında true
              /* and other goodies */
            }) => (
              // <form onReset={formikProps.handleReset} onSubmit={formikProps.handleSubmit} {...props} />
              <Form>
                <Box sx={{display:"flex", flexDirection:"column",gap:2}}>
                <TextField
                  name="username" //formik name attributedından eşleştirme yapıyor.
                  label="Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yaklayan event
                  error={touched.username && Boolean(errors.username)} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute ı benden false/true degeri bekliyor ondan dolayı daha sağlıklı olması için boolean deger döndürüyoruz.
                  // touched da kullanıcının inputa tıklayıp tıklamadığını yakalıyor
                  helperText={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için errors dan gelen mesajı yakalıyoruz.
                />
                {/* error ve helperText propertyleri Textfield componentine ait propertyler. */}
                {/* mui textfield kullanmadığımzda <span>{touched.username && errors.username}</span> */}

                <TextField
                  id="firstName"
                  name="firstName"
                  label="FirstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
                <TextField
                  id="lastName"
                  name="lastName"
                  label="LastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />

                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Button type="submit" variant="contained" disabled={isSubmitting}>
                 {isSubmitting ? "Loading...": "Sign Up"}
                </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
