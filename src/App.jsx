import React, { useState } from "react";
import "./styles/styles.css";
import expectedDB from "./expectedDB.json";
import { FormComponent } from "./components/NewAccountsForm";
import { AccountsTree } from "./components/AccountsTree";
import { FilterForm } from "./components/FilterForm";
//import { filterAccounts, filterForm, displayFilteredItems } from "./components/AccountsFilters";


export default function App() {
  // State to manage the filter type
  const [filterType, setFilterType] = useState("None");

  // Filtered items based on the selected filter type
  const filteredItems = expectedDB.accounts[0].items.filter(
    (item) => {
      console.log('Filtering item:', item);
      console.log('Filter Type:', filterType);
      return item.type === filterType;
    }
  );

  // Function to handle filter type change
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  return (
    <>
      <FormComponent />

      {/* Accounts Tree Component */}
      <AccountsTree />


      {/* Filter form */}
      <FilterForm onChange={(filterType) => {console.log(filterType)}}/>

      {/* Display filtered items */}
      <div className="accountsTree">
        <h3>Filtered Items (Type: {filterType})</h3>
        <ul> {/* will be Account List*/}
          {filteredItems.map((item, index) => (
            <li key={index}> {/*  will be  Account List items*/}
              <strong>Code: {item.code}</strong>
              <p>Description: {item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
