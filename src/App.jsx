import React, { useState } from "react";
import "./styles/styles.css";
import expectedDB from "./expectedDB.json";
import { FormComponent } from "./components/NewAccountsForm";
import { AccountsTree } from "./components/AccountsTree";
import { FilterForm } from "./components/AccountsFilter";
import { DisplayFilteredItems } from "./components/DisplayFilteredItems";
import { DisplayNestedItems } from './components/DisplayNestedItems';


export default function App() {
  // State to manage the filter type
  const [filterType, setFilterType] = useState("None");

  // Filtered items based on the selected filter type
  const filteredItems = expectedDB.accounts[0].items.filter(
    (item) => item.type === filterType
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
      <FilterForm onChange={setFilterType} />

      {/* Display filtered items */}
      <DisplayFilteredItems filterType={filterType} filteredItems={filteredItems} />

      
      <div>
        <h1>Nested JSON Items</h1>
        <DisplayNestedItems items={expectedDB.accounts[0].items} />
      </div>
     
    </>
  );
}