import React, { FC, ChangeEvent } from "react";
import FormTweet from "../../../../extras/forms/components/FormTweet";
import Input from "../../../../extras/forms/components/Input";
import Joi from "joi";
import {
  PostFromClientType,
  CreatePostErrors,
} from "../models/types/postTypes";
import TextField from "@mui/material/TextField";
// import AppBar from '@mui/material/AppBar'
// import Toolbar from '@mui/material/Toolbar'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import Menu from '@mui/icons-material/Menu'

type Props = {
  title?: string;
  onSubmit: () => void;
  onReset: () => void;
  onFormChange: () => Joi.ValidationError | null;
  errors: CreatePostErrors;
  data: PostFromClientType;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const PostForm: FC<Props> = ({
  onSubmit,
  onReset,
  onFormChange,
  title,
  errors,
  data,
  onInputChange,
}) => {
  return (
    <FormTweet
      onSubmit={onSubmit}
      onReset={onReset}
      onFormChange={onFormChange}
      styles={{ maxWidth: "800px" }}
      title={title}
      spacing={1}
    >
      <Input
        name="content"
        label="tweet out!!!"
        error={errors.content}
        onInputChange={onInputChange}
        data={data}
        variant="filled"
        breakPoints={{ sm: 12 }}
        multiline={true}
        height={130}
      />
      <Input
        name="url"
        label="image url"
        error={errors.url}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
        variant="filled"
      />
      <Input
        name="alt"
        label="image alt"
        error={errors.alt}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
        variant="filled"
      />
    </FormTweet>
  );
};

export default React.memo(PostForm);
