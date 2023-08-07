import React, { ElementType, FC, ReactNode } from "react";
import Button from "@mui/material/Button";

type Props = {
  variant?: "contained" | "outlined" | "text";
  component?: ElementType<any>;
  size?: "small" | "medium" | "large";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onClick: () => void;
  disabled?: boolean;
  node: ReactNode;
  borderRadius?: string;
  padding?: string;
  fontWeight?: string;
};

const FormButton: FC<Props> = ({
  variant = "contained",
  component = "button",
  size = "medium",
  color = "primary",
  onClick,
  disabled = false,
  node,
  borderRadius,
  padding,
  fontWeight,
}) => {
  return (
    <Button
      variant={variant}
      component={component}
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth
      sx={{
        borderRadius: borderRadius ? borderRadius : undefined,
        padding: padding ? padding : undefined,
        fontWeight: fontWeight ? fontWeight : undefined,
      }}
    >
      {node}
    </Button>
  );
};

export default React.memo(FormButton);
