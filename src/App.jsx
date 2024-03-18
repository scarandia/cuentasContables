import React, { useState } from "react";
import "./styles/styles.css";
import expectedDB from "./expectedDB.json";
import { FormComponent } from "./components/NewAccountsForm";
import { AccountsTree } from "./components/AccountsTree";
import { FilterForm } from "./components/FilterForm";
import { DisplayFilteredItems } from "./components/DisplayFilteredItems";


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
      <FilterForm onChange={(filterType) => { console.log(filterType) }} />

      {/* Display filtered items */}

      {/*<DisplayFilteredItems />*/}
    </>
  );
}
