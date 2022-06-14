import React, { useState, useRef, useEffect } from "react";
import DescriptionInput from "./inputControl/DescriptionInput";
import TitleInput from "./inputControl/TitleInput";
import AmountInput from "./inputControl/AmountInput";
import AddNewData from "./ReimbursementButton/AddNewData";
import CategoryInput from "./inputControl/CategoryInput";
import UploadImg from "./ReimbursementButton/UploadImg";
import ReciptInput from "./inputControl/ReciptInput";
import ListView from "./RightInputControl/listView";
import "./NewReimbursementStyle.css";
import { FormControl } from "@mui/material";

function NewReimbursement() {
  const [addFormData, setAddFormData] = useState({
    Title: "",
    Amount: "",
    Category: "",
    Description: "",
  });

  const handleSelectFormDataChange = (event) => {
    event.preventDefault();

    const SelectName = event.target.getAttribute("name");
    console.log(SelectName);
  };

  const handleInputFormDataChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  return (
    <div className="NewReimbursement">
      <div className="leftNewReimb">
        <FormControl sx={{ p: 3, border: "1px grey" }}>
          <label className="centralLabel">Payment Reimburse</label>
          <TitleInput handleInputFormDataChange={handleInputFormDataChange} />
          <AmountInput handleInputFormDataChange={handleInputFormDataChange} />
          <br />
          <CategoryInput
            handleSelectFormDataChange={handleSelectFormDataChange}
          />
          <br />
          <DescriptionInput
            handleInputFormDataChange={handleInputFormDataChange}
          />
          <br />
          <label>Recipt</label>
          <ReciptInput />
          <br />
          <UploadImg />
          <br />
          <AddNewData />
        </FormControl>
      </div>
      <div className="rightNewReimb">
        <ListView addFormData={addFormData} />
      </div>
    </div>
  );
}

export default NewReimbursement;
