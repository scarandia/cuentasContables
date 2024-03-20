import React, { useState } from "react";
 
export const FilterForm = (props) => {
  // State to manage the filter type
  const [filterType, setFilterType] = useState("None");
  // Function to handle filter type change
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  React.useEffect(() => {
    props.onChange(filterType);
  }, [filterType]);


  return (
    <form>
      <div className="form-row">
        <label htmlFor="filterType">{props.title || 'Filter'}</label>
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
    
      {filterType === 'None' && <p>No filters applied</p>}
      {filterType === 'Haber' && <p>Showing Haber Transactions.</p>}
      {filterType === 'Debe' && <p>Showing Debe Transactions.</p>}
      {filterType === 'Patrimonio' && <p>Showing Patrimonio Transactions.</p>}
      {filterType === 'Pasivos' && <p>Showing Pasivos Transactions.</p>}
    </form>
  );
}

