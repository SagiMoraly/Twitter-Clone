import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../collections/users/providers/UserProvider";
import useHandleUsers from "../collections/users/hooks/useHandleUsers";
import useForm from "../../extras/forms/hooks/useForm";
import initialLoginForm from "../collections/users/helpers/initialForms/initialLoginForm";
import loginSchema from "../collections/users/models/Joi/loginSchema";
import Container from "@mui/material/Container";
import Form from "../../extras/forms/components/Form";
import Input from "../../extras/forms/components/Input";
import FormLink from "../../extras/forms/components/FormLink";

const LoginPage = () => {
  const { user } = useUser();
  const { handleLogin } = useHandleUsers();

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  if (user) return <Navigate replace to={"/home"} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        title="login"
        styles={{ maxWidth: "450px" }}
        to={"/"}
      >
        <Input
          label="email"
          name="email"
          type="email"
          error={value.errors.email}
          onInputChange={rest.handleInputChange}
          data={value.data}
        />
        <Input
          label="password"
          name="password"
          type="password"
          error={value.errors.password}
          onInputChange={rest.handleInputChange}
          data={value.data}
        />
        <FormLink text="Did not registered yet?" to={"/signup"} />
      </Form>
    </Container>
  );
};

export default LoginPage;
