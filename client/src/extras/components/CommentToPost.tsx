import useForm from "../../extras/forms/hooks/useForm";
import CommentForm from "../../layout/collections/posts/components/comment/CommentForm";
import initialCreateCommentObject from "../../layout/collections/posts/helpers/initialForms/initialCreateCommentObject";
import useComments from "../../layout/collections/posts/hooks/useComments";
import commentSchema from "../../layout/collections/posts/models/Joi/commentSchema";
import { useUserLoged } from "../../layout/collections/users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import Container from "@mui/material/Container";

export const CommentToPost = () => {
  const { handleCreateComment } = useComments();
  const { user } = useUserLoged();
  const { value, ...rest } = useForm(
    initialCreateCommentObject,
    commentSchema,
    handleCreateComment
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
