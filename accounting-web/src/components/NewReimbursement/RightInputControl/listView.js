import React, { useState, useEffect, useRef } from "react";
import FlatList from "react";
import "../inputControl/AmountInput";
import "../inputControl/CategoryInput";
import "../inputControl/DescriptionInput";
import "../inputControl/ReciptInput";
import "../inputControl/TitleInput";
import "../ReimbursementButton/AddNewData";
import "../ReimbursementButton/SubmitNewData";
import "./listViewStyle.css";

function ListView({ reimbursementList }) {
  return (
    <div className="reimburseListView">
      <label className="reimbursementTitle">Reimbursement</label>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {reimbursementList.map(
            (reimburseData, index) =>
              (reimburseData = !null ? (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{reimburseData.Title}</th>
                  <th>{reimburseData.Amount}</th>
                  <th>{reimburseData.Category}</th>
                  <th>{reimburseData.Description}</th>
                </tr>
              ) : null)
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListView;
