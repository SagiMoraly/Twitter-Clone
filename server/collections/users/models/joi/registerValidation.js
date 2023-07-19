const Joi = require("joi");

const NAME = Joi.object()
  .keys({
    first: Joi.string().min(2).max(256).required(),
    last: Joi.string().min(2).max(256).required(),
  })
  .required();

const IMAGE = Joi.object()
  .keys({
    url: Joi.string()
      .ruleset.regex(
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
      )
      .rule({ message: "user image mast be a valid url" })
      .allow(""),
    alt: Joi.string().min(2).max(256).allow(""),
  })
  .required();

const BGIMAGE = Joi.object().keys({
  BGurl: Joi.string()
    .ruleset.regex(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    )
    .rule({ message: "user image mast be a valid url" })
    .allow(""),
  BGalt: Joi.string().min(2).max(256).allow(""),
});

const PROFILE = Joi.object()
  .keys({
    name: NAME,
    bio: Joi.string().min(2).max(256).allow(""),
    location: Joi.string().min(2).max(256).allow(""),
    profilePicture: IMAGE,
    backGroundProfilePicture: BGIMAGE,
  })
  .required();

const registerValidation = (user) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).max(15).required(),
    email: Joi.string()
      .ruleset.pattern(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      )
      .rule({ message: 'user "mail" mast be a valid mail' })
      .required(),
    password: Joi.string()
      .ruleset.regex(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
      )
      .rule({
        message:
          'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
      })
      .required(),
    profile: PROFILE,
    isAdmin: Joi.boolean().allow(""),
  });
  return schema.validate(user);
};

module.exports = registerValidation;
