import React, { ChangeEvent, FC } from "react";
import TextField from "@mui/material/TextField";
import { makeFirstLetterCapital } from "../utils/algoMethods";
import Grid from "@mui/material/Grid";

type VariantType = "filled" | "outlined" | "standard";
type BreakPointsKeysType = "xs" | "sm" | "md" | "lg" | "xl";
type BreakPointValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  variant?: VariantType;
  type?: string;
  name: string;
  data: Record<string, unknown>;
  label: string;
  required?: boolean;
  error?: string;
  multiline?: boolean;
  height?: number;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  breakPoints?: Partial<Record<BreakPointsKeysType, BreakPointValueType>>;
};

const Input: FC<Props> = ({
  type = "text",
  name,
  data,
  label,
  required = true,
  error,
  onInputChange,
  breakPoints,
  multiline = false,
  height,
}) => {
  return (
    <Grid item xs={12} {...breakPoints}>
      <TextField
        label={makeFirstLetterCapital(label)}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        error={Boolean(error)}
        helperText={error}
        onChange={onInputChange}
        fullWidth
        autoComplete="off"
        multiline={multiline}
        inputProps={{
          style: {
            height: height ? `${height}px` : undefined,
          },
        }}
      />
    </Grid>
  );
};

export default React.memo(Input);
