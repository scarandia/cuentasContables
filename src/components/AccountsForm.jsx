import React from "react";

export function AccountForm() {
  return (
    <form className="new-item-form">
      <div className="form-row">
        <h3 className="header">New Transaction Information</h3>
        <label htmlFor="type">Type</label>
        <select name="type" id="type">
          <option value="Haber">Haber</option>
          <option value="Debe">Debe</option>
          <option value="Patrimonio">Patrimonio</option>
          <option value="Pasivos">Pasivos</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="item">Description</label>
        <input type="text" id="item" />
      </div>
      <div className="form-row">
        <label htmlFor="item">Sub-item of</label>
        <input type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
