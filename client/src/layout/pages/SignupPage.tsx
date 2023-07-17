import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../collections/users copy/providers/UserProvider";
import useHandleUsers from "../collections/users copy/hooks/useHandleUsers";
import useForm from "../../extras/forms/hooks/useForm";
import initialSignupForm from "../collections/users copy/helpers/initialForms/initialSignupForm";
import signupSchema from "../collections/users copy/models/Joi/signupSchema";
import Container from "@mui/material/Container";
import UserForm from "../collections/users copy/components/UserForm";

const SignupPage = () => {
  const { user } = useUser();
  const { handleSignup } = useHandleUsers();
  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSignup
  );

  if (user) return <Navigate replace to={"/"} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        title="register user"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleInputChange}
        data={value.data}
        errors={value.errors}
        setData={rest.setData}
      />
    </Container>
  );
};

export default SignupPage;
