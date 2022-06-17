import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./CategoryInputStyle.css";
import { FormControl } from "@mui/material";

const CategoryOptions = [
  { key: 1, text: "Allowance", value: "Allowance" },
  { key: 2, text: "Fare", value: "Fare" },
  { key: 3, text: "Salary", value: "Salary" },
  { key: 4, text: "Others", value: "Others" },
];

function CategoryInput({ handleSelectFormDataChange }) {
  const [categoryState, setCategoryState] = React.useState("");

  const handleChange = (event) => {
    setCategoryState(event.target.value);
    handleSelectFormDataChange(event);
  };

  return (
    <FormControl>
      <InputLabel id="inputLabel">Category</InputLabel>
      <Select
        labelId="selectLabel"
        name="Category"
        id="select"
        defaultValue=""
        value={categoryState}
        label="Category"
        onChange={handleChange}
      >
        {CategoryOptions.map((data) => (
          <MenuItem key={data.key} value={data.value}>
            {data.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CategoryInput;
