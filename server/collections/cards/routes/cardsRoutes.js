const express = require("express");
const {
  getCards,
  getCard,
  createCard,
  getMyCards,
  updateCard,
  likeCard,
  deleteCard,
  bizNumberReDo,
} = require("../controllers/cardsController");
const auth = require("../../../middleware/auth/authService");
const router = express.Router();

router.get("/", getCards);
router.post("/", auth, createCard);
router.get("/:cardId", getCard);
router.get("/my-cards/:userId", getMyCards);
router.put("/:cardId", auth, updateCard);
router.patch("/:cardId", auth, likeCard);
router.delete("/:cardId", auth, deleteCard);
router.patch("/bizNumberReDo/:cardId", auth, bizNumberReDo);

module.exports = router;
