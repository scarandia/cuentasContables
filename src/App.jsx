import React from "react";
import "./styles/styles.css";
import expectedDB from "./expectedDB.json";

export default function App() {
  const filteredItems = expectedDB.accounts[0].items.filter(
    (item) => item.type === "Debe"
  );

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <h3 className="header">New Transaction Information</h3>
          <label name="item">Type</label>
          <select name="Type" id="type">
            <option value="debe">Debe</option>
            <option value="haber">Haber</option>
            <option value="patrimonip">Patrimonio</option>
            <option value="pasivos">Pasivos</option>
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

      <h3 className="header">Accounts Tree </h3>
      <div className="AccountsTree">
        <h2>Filtered Items (Type: Debe)</h2>
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>
              <strong>Code: {item.code}</strong>
              <p>Description: {item.description}</p>
            </li>
          ))}
        </ul>
      </div>


    </>
  );
}
