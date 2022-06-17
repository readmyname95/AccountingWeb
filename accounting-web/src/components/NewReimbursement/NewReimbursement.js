import React, { useState, useRef, useEffect } from "react";
import DescriptionInput from "./inputControl/DescriptionInput";
import TitleInput from "./inputControl/TitleInput";
import AmountInput from "./inputControl/AmountInput";
import AddNewData from "./ReimbursementButton/AddNewData";
import CategoryInput from "./inputControl/CategoryInput";
import SubmitNewData from "./ReimbursementButton/SubmitNewData";
import ReciptInput from "./inputControl/ReciptInput";
import ListView from "./RightInputControl/listView";
import "./NewReimbursementStyle.css";
import { nanoid } from "nanoid";
import { FormControl } from "@mui/material";
import data from "./data.json";

function NewReimbursement() {
  const [addFormData, setAddFormData] = useState({
    Title: "",
    Amount: "",
    Category: "",
    Description: "",
  });

  const [reimbursementList, setReimbursementList] = useState(data);

  const handleSelectFormDataChange = (event) => {
    event.preventDefault();

    const SelectName = event.target.name;
    const SelectValue = event.target.value;

    const newSelectFormData = { ...addFormData };
    newSelectFormData[SelectName] = SelectValue;

    setAddFormData(newSelectFormData);
  };

  const handleInputFormDataChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleReimbursementList = (event) => {
    event.preventDefault();

    const newReimbursementListData = {
      id: nanoid(),
      Title: addFormData.Title,
      Amount: addFormData.Amount,
      Category: addFormData.Category,
      Description: addFormData.Description,
    };

    const ReimbursementListDatas = [
      ...reimbursementList,
      newReimbursementListData,
    ];

    setReimbursementList(ReimbursementListDatas);
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
          <AddNewData handleReimbursementList={handleReimbursementList} />
          <br />
          <SubmitNewData />
        </FormControl>
      </div>
      <div className="rightNewReimb">
        <ListView
          addFormData={addFormData}
          reimbursementList={reimbursementList}
        />
      </div>
    </div>
  );
}

export default NewReimbursement;
