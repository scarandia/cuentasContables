import React from 'react';

export const DisplayFilteredItems = ({ filterType, filteredItems }) => {
    return (
        <div className="accountsTree">
            <h3>Filtered Items (Type: {filterType})</h3>
            <ul>
                {filteredItems && filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <li key={index}>
                            <strong> {item.code}</strong>
                            <p> {item.description}</p>
                        </li>
                    ))
                ) : (
                    <li>No items to display</li>
                )}
            </ul>
        </div>
    );
}