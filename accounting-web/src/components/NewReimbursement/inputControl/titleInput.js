import React from "react";
import TextField from "@mui/material/TextField";
import "./TitleInputStyle.css";

function TitleInput({ handleInputFormDataChange }) {
  return (
    <div>
      <TextField
        id="standardTitle"
        name="Title"
        label="Title *"
        variant="standard"
        onChange={handleInputFormDataChange}
      />
    </div>
  );
}

export default TitleInput;
