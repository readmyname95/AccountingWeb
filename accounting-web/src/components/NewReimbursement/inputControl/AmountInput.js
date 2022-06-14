import React from "react";
import TextField from "@mui/material/TextField";
import "./AmountInputStyle.css";

function AmountInput({ handleInputFormDataChange }) {
  return (
    <TextField
      id="standardAmount"
      name="Amount"
      label="Amount *"
      variant="standard"
      onChange={handleInputFormDataChange}
    />
  );
}

export default AmountInput;
