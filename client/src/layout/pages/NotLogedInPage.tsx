import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import { CardMedia, Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotLogedInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="notLogedInPage">
      <div className="blackBox">
        <TwitterIcon sx={{ color: "white", fontSize: 100 }} />
        <Typography
          sx={{
            marginLeft: "15px",
            marginTop: "15px",
            color: "white",
            fontSize: 70,
          }}
        >
          Happening now
        </Typography>
        <Typography
          sx={{
            marginLeft: "55px",
            marginTop: "105px",
            color: "white",
            fontSize: 30,
          }}
        >
          join Twitter today.
        </Typography>

        <div>
          <Button
            style={{
              borderRadius: "50px",
              fontSize: 17,
              fontWeight: "bold",
              marginTop: "15px",
              marginLeft: "15px",
              padding: "10px 145px",
              backgroundColor: "white",
              color: "black",
            }}
            onClick={() => navigate("/login")}
            variant="contained"
          >
            Login
          </Button>
          <Typography
            sx={{
              marginLeft: "70px",
              marginTop: "10px",
              fontStyle: "italic",
              color: "white",
            }}
          >
            Dont have acount? ,join today!
          </Typography>
          <Button
            style={{
              borderRadius: "50px",
              fontSize: 17,
              fontWeight: "bold",
              marginLeft: "15px",
              marginTop: "5px",
              padding: "10px 140px",
            }}
            onClick={() => navigate("/signup")}
            variant="contained"
          >
            signup
          </Button>
        </div>
      </div>
    </div>
  );
};
