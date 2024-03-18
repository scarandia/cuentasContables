export const DisplayFilteredItems = () => {
    return (
  
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
    );
  }
