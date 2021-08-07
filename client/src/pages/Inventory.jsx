import trash from "../assets/Icons/delete_outline-24px.svg";
import edit from "../assets/Icons/edit-24px.svg";
import "../pages/Inventory.scss";

function Inventory({ inventoryarr }) {
  console.log(inventoryarr);
  const InStock = ({ inStock }) => (
    <li
      className={`item__status ${
        inStock === "In Stock"
          ? "item__status--in-stock"
          : "item__status--out-stock"
      }`}
    >
      {inStock}
    </li>
  );
  const InStockTable = ({ inStock }) => (
    <p
      className={`item__status ${
        inStock === "In Stock"
          ? "item__status--in-stock"
          : "item__status--out-stock"
      }`}
    >
      {inStock}
    </p>
  );
  return inventoryarr.map((item) => {
    return (
      <div key={item.id}>
        <ul className="item mobile">
          <div className="item__arrangement">
            <section className="item__sub-arrangement">
              <div>
                <h4>INVENTORY ITEM</h4>
                <li className="item__item">{`${item.itemName} >`}</li>
              </div>
              <div>
                <h4>CATEGORY</h4>
                <li className="item__category">{item.category}</li>
              </div>
            </section>
            <section className="item__sub-arrangement">
              <div>
                <h4>STATUS</h4>
                <InStock inStock={item.status}></InStock>
              </div>
              <div>
                <h4>QTY</h4>
                <li className="item__qty">{item.quantity}</li>
              </div>
              <div>
                <h4>WAREHOUSE</h4>
                <li className="item__warehouse">{item.warehouseName}</li>
              </div>
            </section>
          </div>
          <div className="item__action">
            <img src={trash} alt="trash"></img>
            <img src={edit} alt="edit"></img>
          </div>
        </ul>
        <div className="tablet">
          <div className="tablet__body">
            <p className="item__item">{`${item.itemName} >`}</p>
            <p className="item__category">{item.category}</p>
            <InStockTable inStock={item.status}></InStockTable>
            <p className="item__qty">{item.quantity}</p>
            <p className="item__warehouse">{item.warehouseName}</p>
            <div className="item__action">
              <img src={trash} alt="trash"></img>
              <img src={edit} alt="edit"></img>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Inventory;