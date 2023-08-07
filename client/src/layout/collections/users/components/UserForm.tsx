import React, { FC, ChangeEvent } from "react";
import Form from "../../../../extras/forms/components/Form";
import Input from "../../../../extras/forms/components/Input";
import Joi from "joi";
import {
  RegistrationForm,
  RegistrationFormErrors,
} from "../models/types/userType";
import FormLink from "../../../../extras/forms/components/FormLink";

type Props = {
  title?: string;
  onSubmit: () => void;
  onReset: () => void;
  onFormChange: () => Joi.ValidationError | null;
  errors: RegistrationFormErrors;
  data: RegistrationForm;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setData: (data: RegistrationForm) => void;
};
const UserForm: FC<Props> = ({
  onSubmit,
  onReset,
  onFormChange,
  title,
  errors,
  data,
  onInputChange,
  setData,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      onFormChange={onFormChange}
      styles={{ maxWidth: "800px" }}
      title={title}
      to={"/"}
    >
      <Input
        name="userName"
        label="userName"
        error={errors.userName}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="first"
        label="first name"
        error={errors.first}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="last"
        label="last name"
        error={errors.last}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="bio"
        label="bio"
        error={errors.bio}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        name="location"
        label="location"
        error={errors.location}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        name="email"
        label="email"
        type="email"
        error={errors.email}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="password"
        label="password"
        type="password"
        error={errors.password}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="url"
        label="image url"
        error={errors.url}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        name="alt"
        label="image alt"
        error={errors.alt}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        name="BGurl"
        label="background image url"
        error={errors.BGurl}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        name="BGalt"
        label="background image alt"
        error={errors.BGalt}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <FormLink text="Already registered?" to={"/login"} />
    </Form>
  );
};

export default React.memo(UserForm);
