import React from "react";

export function FilteredItemsDisplay({ filteredItems }) {
  return (
    <div className="accountsTree">
      <h3>Filtered Items</h3>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            <strong>Code: {item.code}</strong>
            <p>Description: {item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function filterAccounts(items, filterType) {
  return items.filter(item => item.type === filterType);
}
