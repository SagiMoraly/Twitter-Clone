// import React from "react";
// import useCards from "../collections/posts/hooks/usePosts";
// import { useUser } from "../collections/users/providers/UserProvider";
// import { Navigate } from "react-router-dom";
// import ROUTES from "../../routes/routesModel";
// import useForm from "../../forms/hooks/useForm";
// import initialCreateCardObject from "../collections/posts/helpers/initialForms/initialPostObject";
// import cardSchema from "../collections/posts/models/Joi/postSchema";
// import Container from "@mui/material/Container";
// import CardForm from "../collections/posts/components/PostForm";

// const CreateCardPage = () => {
//   const { handleCreateCard } = useCards();
//   const { user } = useUser();
//   const { value, ...rest } = useForm(
//     initialCreateCardObject,
//     cardSchema,
//     handleCreateCard
//   );
//   const { data, errors } = value;
//   const { handleInputChange, handleReset, onSubmit, validateForm } = rest;

//   if (!user ) return <Navigate replace to={"/"} />;

//   return (
//     <Container>
//       <CardForm
//         title="create business card"
//         data={data}
//         errors={errors}
//         onFormChange={validateForm}
//         onInputChange={handleInputChange}
//         onReset={handleReset}
//         onSubmit={onSubmit}
//       />
//     </Container>
//   );
// };

// export default CreateCardPage;
