import React, { FC, CSSProperties, ReactNode } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormButton from "./FormButton";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Joi from "joi";

type Props = {
  title?: string;
  onSubmit: () => void;
  onReset: () => void;
  onFormChange: () => Joi.ValidationError | null;
  to?: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  spacing?: number;
  styles?: CSSProperties;
  children: ReactNode;
};

const FormTweet: FC<Props> = ({
  title = "",
  onSubmit,
  onReset,
  onFormChange,
  to = "/",
  color = "inherit",
  spacing = 1,
  styles,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      component="form"
      color={color}
      sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
      onSubmit={onSubmit}
      autoComplete="off"
      noValidate
    >
      <Typography align="center" variant="h5" component="h1" mb={2}>
        {title.toUpperCase()}
      </Typography>

      <Grid container spacing={spacing}>
        {children}
      </Grid>

      <Grid container spacing={1} my={2} direction="row" width="100">
        <Grid item xs={2}>
          <FormButton
            node="Tweet"
            onClick={() => {
              onSubmit();
              onReset();
            }}
            disabled={!!onFormChange()}
            size="small"
            borderRadius="9999px"
            fontWeight="bold"
            padding="10px 20px"
          />
        </Grid>
        <Grid item xs={2}>
          <div></div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(FormTweet);
