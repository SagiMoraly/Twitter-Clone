import React from "react";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHead from "./PostHead";
import CardBody from "./PostBody";
import CardActionBar from "./PostActionBar";
import { useNavigate } from "react-router-dom";
import CardInterface from "../../models/interfaces/PostInterface";

type CardProps = {
  card: CardInterface;
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Card: React.FC<CardProps> = ({ card, onDelete, onLike }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 280 }} elevation={4}>
      <CardActionArea onClick={() => navigate(`${"/post"}/${card._id}`)}>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>

      <CardActionBar
        likes={card.likes}
        cardId={card._id}
        cardUserId={card.user_id}
        onDelete={onDelete}
        onLike={onLike}
      />
    </MuiCard>
  );
};

export default Card;
