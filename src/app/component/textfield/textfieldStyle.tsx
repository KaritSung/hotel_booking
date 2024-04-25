"use client";
import { OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MouseEventHandler } from "react";

interface Props {
  name: string;
  id: string;
  placeholder:string;
  
}

export const InputStyle = styled(OutlinedInput)(({ theme }) => ({
  variants: "standard",
  backgroundColor: "#EBEDFF",
  borderRadius: "12px",
}));

export default function TextfieldStyle({ name, id, placeholder}: Props) {
  return (
    <InputStyle
      id={id}
      name={name}
      placeholder={placeholder}
      sx={{
        boxShadow: 3,
        "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
      fullWidth
    ></InputStyle>
  );
}
