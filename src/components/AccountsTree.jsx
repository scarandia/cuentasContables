import "../styles/styles.css";
import expectedDB from "../expectedDB.json";

function AccountsTreeView() {
  {/* Accounts Tree Component */ }
  <h3 className="header">Accounts Tree </h3>
  {/* Filter form */ }
  <form>
    <div className="form-row">
      <label htmlFor="filterType">Filter</label>
      <select>
        name="type"
        id="filterType"
        value={filterType}
        onChange={handleFilterChange}
        <option value="None">None</option>
        <option value="Haber">Haber</option>
        <option value="Debe">Debe</option>
        <option value="Patrimonio">Patrimonio</option>
        <option value="Pasivos">Pasivos</option>
      </select>
    </div>
  </form>
}
export {
  AccountsTreeView
}