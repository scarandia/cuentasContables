import React, { useState } from "react";
import "./styles/styles.css";
import expectedDB from "./expectedDB.json";
import { AccountForm } from "./components/AccountsForm";
import { AccountsTreeView } from "./components/AccountsTree";
import { filterAccounts } from "./components/AccountsFilters";

export default function App() {
  // State to manage the filter type
  const [filterType, setFilterType] = useState("None");

  // Function to handle filter type change
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  // Filtered items based on the selected filter type
  const filteredItems = filterAccounts(expectedDB.accounts[0].items, filterType);

  return (
    <>
      <AccountForm />
      <AccountsTreeView
        filterType={filterType}
        filteredItems={filteredItems}
        handleFilterChange={handleFilterChange}
      />
    </>
  );
}
