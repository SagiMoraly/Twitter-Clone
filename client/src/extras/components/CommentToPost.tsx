import useForm from "../../extras/forms/hooks/useForm";
import CommentForm from "../../layout/collections/posts/components/comment/CommentForm";
import initialCreateCommentObject from "../../layout/collections/posts/helpers/initialForms/initialCreateCommentObject";
import usePosts from "../../layout/collections/posts/hooks/usePosts";
import postSchema from "../../layout/collections/posts/models/Joi/postSchema";
import { useUserLoged } from "../../layout/collections/users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import Container from "@mui/material/Container";

export const CommentToPost = () => {
  const { handleCreatePost } = usePosts();
  const { user } = useUserLoged();
  const { value, ...rest } = useForm(
    initialCreateCommentObject,
    postSchema,
    handleCreatePost
  );

  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, validateForm } = rest;
  return (
    <Container>
      <CommentForm
        data={data}
        errors={errors}
        onFormChange={validateForm}
        onInputChange={handleInputChange}
        onReset={handleReset}
        onSubmit={onSubmit}
      />
    </Container>
  );
};
