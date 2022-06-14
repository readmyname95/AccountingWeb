import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./DescriptionInputStyle.css";

function DescriptionInput({ handleInputFormDataChange }) {
  return (
    <div>
      <TextField
        id="outlined-textarea"
        name="Description"
        className="descriptionInput"
        label="Description"
        placeholder="Description"
        onChange={handleInputFormDataChange}
        multiline
        rows={3}
      />
    </div>
  );
}

export default DescriptionInput;
