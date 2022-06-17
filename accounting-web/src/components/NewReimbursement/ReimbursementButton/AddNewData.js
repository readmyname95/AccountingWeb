import * as React from "react";
import Button from "@mui/material/Button";
import "../RightInputControl/listView";
import "./AddNewDataStyle.css";

function AddNewData({ handleReimbursementList }) {
  return (
    <Button
      className="submitButton"
      variant="contained"
      size="small"
      onClick={handleReimbursementList}
    >
      Add
    </Button>
  );
}

export default AddNewData;
