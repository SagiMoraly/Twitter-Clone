const { handleError } = require("../../../utils/handleErrors");
const normalizeCard = require("../helpers/normalizeCard");
const validateCard = require("../models/joi/validateCard");
const Card = require("../models/mongoose/Card");

const createCard = async (req, res) => {
  try {
    const card = req.body;
    const user = req.user;

    if (!user.isBusiness)
      throw new Error(
        "You must be a business type user in order to create a new business card"
      );

    const { error } = validateCard(card);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    const normalizedCard = normalizeCard(card, user._id);

    const cardToDB = new Card(normalizedCard);
    const cardFromDB = await cardToDB.save();
    res.send(cardFromDB);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const getCards = async (req, res) => {
  try {
    const cards = await Card.find().sort({ createdAt: "descending" });
    return res.send(cards);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const getCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findById(cardId);

    if (!card)
      throw new Error("A card with this ID cannot be found in the database");

    return res.send(card);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const getMyCards = async (req, res) => {
  try {
    const { userId } = req.params;
    const card = await Card.find({ user_id: userId });
    return res.send(card);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const updateCard = async (req, res) => {
  try {
    let card = req.body;
    const { cardId } = req.params;
    card = await normalizeCard(card);
    card = await Card.findByIdAndUpdate(cardId, card, {
      new: true,
    });
    if (!card)
      throw new Error("A card with this ID cannot be found in the database");

    return res.send(card);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const likeCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const userId = req.user._id;
    let card = await Card.findById(cardId);

    if (!card)
      throw new Error("A card with this ID cannot be found in the database");

    const cardLikes = card.likes.find((id) => id === userId);

    if (!cardLikes) {
      card.likes.push(userId);
      card = await card.save();
      return res.send(card);
    }

    card.likes = card.likes.filter((id) => id !== userId);
    card = await card.save();

    return res.send(card);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const deleteCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const user = req.user;

    if (!user.isAdmin)
      if (!user.isBusiness)
        throw new Error(
          "You must be a business or admin type user in order to delete a business card"
        );

    const card = await Card.findByIdAndDelete(cardId);

    if (!card)
      throw new Error("A card with this ID cannot be found in the database");

    return res.send(card);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const bizNumberReDo = async (req, res) => {
  try {
    const user = req.user;
    const { isAdmin } = user;
    const { cardId } = req.params;
    let card = req.body;

    if (!isAdmin)
      throw new Error(
        "You must be a admin type user in order to redo the biznumber business card"
      );

    card.bizNumber = undefined;
    card = await normalizeCard(card);
    card = await Card.findByIdAndUpdate(cardId, card, {
      new: true,
    });

    if (!card)
      throw new Error("A card with this ID cannot be found in the database");

    return res.send(card);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

exports.getCards = getCards;
exports.getCard = getCard;
exports.deleteCard = deleteCard;
exports.getMyCards = getMyCards;
exports.updateCard = updateCard;
exports.likeCard = likeCard;
exports.createCard = createCard;
exports.bizNumberReDo = bizNumberReDo;
