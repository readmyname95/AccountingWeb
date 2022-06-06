import React from "react";
import DescriptionInput from "./inputControl/DescriptionInput";
import TitleInput from "./inputControl/titleInput";
import AddNewData from "./ReimbursementButton/AddNewData";
import CategoryInput from "./inputControl/CategoryInput";
import UploadImg from "./ReimbursementButton/UploadImg";
import ReciptInput from "./inputControl/ReciptInput";
import "./NewReimbursementStyle.css";

function NewReimbursement() {
  return (
    <div className="NewReimbursement">
      <div className="leftNewReimb">
        <label>Payment Reimburse</label>
        <br />
        <label>
          Title:
          <TitleInput />
        </label>
        <label>Amount:</label>
        <TitleInput />
        <label>Category</label>
        <CategoryInput />
        <label>Description</label>
        <DescriptionInput />
        <label>Recipt</label>
        <ReciptInput />
        <UploadImg />
        <AddNewData />
      </div>
      <div className="rightNewReimb">
        <label>Reimbursement</label>
      </div>
    </div>
  );
}

export default NewReimbursement;
