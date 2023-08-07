import React, { FC, ChangeEvent } from "react";
import FormComment from "../../../../../extras/forms/components/FormTweet";
import Input from "../../../../../extras/forms/components/Input";
import Joi from "joi";
import {
  CommentFromClientType,
  CreateCommentErrors,
} from "../../models/types/postTypes";

type Props = {
  title?: string;
  onSubmit: () => void;
  onReset: () => void;
  onFormChange: () => Joi.ValidationError | null;
  errors: CreateCommentErrors;
  data: CommentFromClientType;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CommentForm: FC<Props> = ({
  onSubmit,
  onReset,
  onFormChange,
  title,
  errors,
  data,
  onInputChange,
}) => {
  return (
    <FormComment
      onSubmit={onSubmit}
      onReset={onReset}
      onFormChange={onFormChange}
      styles={{ maxWidth: "800px" }}
      title={title}
      spacing={1}
    >
      <Input
        name="content"
        label="Comment Here"
        error={errors.content}
        onInputChange={onInputChange}
        data={data}
        variant="filled"
        breakPoints={{ sm: 12 }}
        multiline={true}
        height={130}
      />
    </FormComment>
  );
};

export default React.memo(CommentForm);
