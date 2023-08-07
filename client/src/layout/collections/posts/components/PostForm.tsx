import React, { FC, ChangeEvent, useState } from "react";
import FormTweet from "../../../../extras/forms/components/FormTweet";
import Input from "../../../../extras/forms/components/Input";
import Joi from "joi";
import {
  PostFromClientType,
  CreatePostErrors,
} from "../models/types/postTypes";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

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
  const [imageOpen, setImageOpen] = useState(false);
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
        label="What's happening?"
        error={errors.content}
        onInputChange={onInputChange}
        data={data}
        variant="filled"
        breakPoints={{ sm: 12 }}
        multiline={true}
        height={130}
      />
      {imageOpen && (
        <>
          <Input
            name="url"
            label="image url"
            error={errors.url}
            onInputChange={onInputChange}
            data={data}
            breakPoints={{ sm: 5 }}
            required={false}
            variant="filled"
          />
          <Input
            name="alt"
            label="image alt"
            error={errors.alt}
            onInputChange={onInputChange}
            data={data}
            breakPoints={{ sm: 5 }}
            required={false}
            variant="filled"
          />
        </>
      )}
      <div style={{ margin: "17px" }}>
        <ImageOutlinedIcon
          onClick={() => {
            setImageOpen(!imageOpen);
          }}
          fontSize="large"
          sx={{ color: "#45a7e9" }}
        ></ImageOutlinedIcon>
      </div>
    </FormTweet>
  );
};
export default React.memo(PostForm);
