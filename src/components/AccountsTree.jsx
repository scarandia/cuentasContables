import React from "react";

export function AccountsTreeView({ filterType, filteredItems, handleFilterChange }) {
  return (
    <>
      {/* Accounts Tree Component */}
      <h3 className="header">Accounts Tree </h3>
      {/* Filter form */}
      <form>
        <div className="form-row">
          <label htmlFor="filterType">Filter</label>
          <select
            name="type"
            id="filterType"
            value={filterType}
            onChange={handleFilterChange}
          >
            <option value="None">None</option>
            <option value="Haber">Haber</option>
            <option value="Debe">Debe</option>
            <option value="Patrimonio">Patrimonio</option>
            <option value="Pasivos">Pasivos</option>
          </select>
        </div>
      </form>

      {/* Display filtered items */}
      <div className="accountsTree">
        <h3>Filtered Items (Type: {filterType})</h3>
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
