import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useForm from "../../extras/forms/hooks/useForm";
import initialPostForm from "../collections/posts/helpers/initialForms/initialPostObject";
import usePosts from "../collections/posts/hooks/usePosts";
import { useUserLoged } from "../collections/users/providers/UserProvider";
import { useNavigate, Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import mapPostToModel from "../collections/posts/helpers/normalizations/mapPostToModel";
import PostForm from "../collections/posts/components/PostForm";
import PostEditSchema from "../collections/posts/models/Joi/postEditSchema";
import PostInterface from "../collections/posts/models/interfaces/PostInterface";

const EditPostPage = () => {
  const { user } = useUserLoged();
  const { postId } = useParams();
  const { handleUpdatePost, handleGetPost } = usePosts();

  const navigate = useNavigate();

  const { value, ...rest } = useForm(
    initialPostForm,
    PostEditSchema,
    handleUpdatePost
  );

  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, setData, validateForm } =
    rest;

  useEffect(() => {
    if (postId)
      handleGetPost(postId).then(
        (postFromServer: PostInterface | undefined) => {
          if (!postFromServer || user?._id !== postFromServer!.author)
            return navigate("/");

          const modeledPost = mapPostToModel(postFromServer!);
          setData(modeledPost);
        }
      );
  }, []);

  if (!user) return <Navigate replace to={"/"} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PostForm
        title="edit Post"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        onFormChange={validateForm}
        onInputChange={handleInputChange}
        data={data}
      />
    </Container>
  );
};

export default EditPostPage;
