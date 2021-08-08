import "../../components/FormAddNewInvetory/FormAddNewInventory.scss";
import arrow from "../../assets/Icons/arrow_back-24px.svg";

function FormAddNewInventory() {
  return (
    <div className="additems">
      <h3 className="additem__title">
        <img src={arrow} alt="back" className="additem__bkarr"></img>ADD NEW
        INVENTORY ITEM
      </h3>
      <h4 className="additem__fromsec">Item Details</h4>
      <form>
        <div className="itemdetails-wrapper">
          <label HTMLfor="item-name" className="additem__label">
            Item Name
          </label>
          <input
            type="text"
            id="item-name"
            placeholder="Item Name"
            className="additem__name"
          ></input>
          <label
            HTMLfor="item-description"
            value="Description"
            className="additem__des-tile"
          >
            Description
          </label>
          <input
            type="text"
            id="item-description"
            placeholder="Please enter a brief description..."
            className="additem__description"
          ></input>
          <label HTMLfor="catgory" className="additem__cat-title">
            Category
          </label>
          <select id="category" className="additem__cat-sel">
            <option value="category-1" className="additem__cat-item">
              Item 1
            </option>
            <option value="category-2" className="additem__cat-item">
              Item 2
            </option>
            <option value="category-3" className="additem__cat-item">
              Item 3
            </option>
            <option value="category-4" className="additem__cat-item">
              Item 4
            </option>
          </select>
        </div>

        <div className="itemavail-wrapper">
          <h4 className="additem__avail">Item Availability</h4>

          <label HTMLfor="item-name" className="additem__radsel">
            Status
          </label>
          <div className="additem__radbtns">
            <label HTMLfor="item-status-in" className="additem__radsel">
              In Stock
            </label>
            <input
              type="radio"
              name="item-status-in"
              value="In Stock"
              className="additem__raditem"
            ></input>
            <label HTMLfor="item-status-out" className="additem__radsel">
              Out Of Stock
            </label>
            <input
              type="radio"
              name="item-status-out"
              value="Out Of Stock"
              className="additem__raditem"
            ></input>
          </div>
          <label HTMLfor="warehouse" className="additem__waresel">
            Warehouse
          </label>
          <select id="warehouse" className="additem__warsel-opts">
            <option value="default" className="additem__warsel-item">
              Please Select
            </option>
            <option value="warehouse-1" className="additem__warsel-item">
              warehouse-1
            </option>
            <option value="warehouse-2" className="additem__warsel-item">
              warehouse-2
            </option>
            <option value="warehouse-3" className="additem__warsel-item">
              warehouse-3
            </option>
            <option value="warehouse-4" className="additem__warsel-item">
              warehouse-4
            </option>
          </select>
        </div>
        <button className="additem__cancelbtn">Cancel</button>
        <button className="additem__savebtn">Save</button>
      </form>
    </div>
  );
}

export default FormAddNewInventory;
