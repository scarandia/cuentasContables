import React from 'react';

export const DisplayNestedItems = ({ items }) => {
  const renderItems = (items) => {
    if (!Array.isArray(items)) {
      return (
        <div>
          <strong> {items.code}</strong>
          <p> {items.description}</p>
        </div>
      );
    }

    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong> {item.code}</strong>
            <p> {item.description}</p>
            {item.subItems && item.subItems !== null ? (
              renderItems(item.subItems)
            ) : null}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="accountsTree">
      <h3>Nested Items</h3>
      {renderItems(items)}
    </div>
  );
};
