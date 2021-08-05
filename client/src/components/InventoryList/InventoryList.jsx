import "../InventoryList/InventoryList.scss";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";

function InventoryList() {
  return (
    <>
      {/* Top Header and Search Section */}
      <section className="head">
        <h3 className="head__title">Inventory</h3>
        <form className="head__form">
          <label className="head__search" htmlFor="search"></label>
          <input
            type="text"
            id="search"
            name="search"
            value="Search ..."
            className="head__search-box"
          ></input>
          <button className="head__button">+ Add New Item</button>
        </form>
      </section>

      {/* {Filter Navigation Bar} */}
      <ul className="filter">
        <li className="filter__item">INVENTORY ITEM</li>
        <li className="filter__category">CATEGORY</li>
        <li className="filter__status">STATUS</li>
        <li className="filter__qty">QTY</li>
        <li className="filter__warehouse">WAREHOUSE</li>
        <li className="filter__actions">ACTIONS</li>
      </ul>
      {/* INVENTORY ITEMS */}
      <ul className="item">
        <li className="item__item">Television</li>
        <li className="item__category">Electronics</li>
        <li className="item__status">Status</li>
        <li className="item__qty">500</li>
        <li className="item__warehouse">Manhattan</li>
        <li className="item__action">
          <img src={trash} alt="trash"></img>
          <img src={edit} alt="edit"></img>
        </li>
      </ul>
    </>
  );
}

export default InventoryList;
