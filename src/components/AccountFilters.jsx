import "./styles/styles.css";
import expectedDB from "./expectedDB.json";

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
<ul> {/* will be Account List*/}
  {filteredItems.map((item, index) => (
    <li key={index}> {/*  will be  Account List items*/}
      <strong>Code: {item.code}</strong>
      <p>Description: {item.description}</p>
    </li>
  ))}
</ul>
</div>