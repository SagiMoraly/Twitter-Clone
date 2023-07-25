import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useForm from "../../extras/forms/hooks/useForm";
import { useUserLoged } from "../collections/users/providers/UserProvider";
import { useNavigate, Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import useHandleUsers from "../collections/users/hooks/useHandleUsers";
import initialSignupForm from "../collections/users/helpers/initialForms/initialSignupForm";
import userEditSchema from "../collections/users/models/Joi/userEditSchema";
import mapUserEditToModel from "../collections/users/helpers/normalization/mapUserEditToModel";
import UserFormEdit from "../collections/users/components/UserFormEdit";
import useUser, { userType } from "../collections/users/hooks/useUser";

const EditUserPage = () => {
  const { handleGetUser, handleUpdateUser } = useUser();
  const { user } = useUserLoged();
  const { userId } = useParams();
  const { handleSignup } = useHandleUsers();

  const navigate = useNavigate();

  const { value, ...rest } = useForm(
    initialSignupForm,
    userEditSchema,
    handleUpdateUser
  );

  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, setData, validateForm } =
    rest;

  useEffect(() => {
    if (userId)
      handleGetUser(userId).then((userFromServer: any) => {
        if (user?._id !== userFromServer!._id) return navigate("/");
        const modeleduser = mapUserEditToModel(userFromServer!);
        setData(modeleduser);
      });
  }, []);

  // if (userId) return <Navigate replace to={ROUTES.LOGIN} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserFormEdit
        title="edit user"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        onFormChange={validateForm}
        onInputChange={handleInputChange}
        data={data}
        setData={rest.setData}
      />
    </Container>
  );
};

export default EditUserPage;
