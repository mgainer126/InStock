import "../WarehouseInventoryHeadSort/WarehouseInventoryHeadSort.scss";
import sort from "../../assets/Icons/sort-24px.svg";

function WarehouseInventoryHeadSort() {
  return (
    <div>
      <ul className="filter">
        <li className="filter__item">
          INVENTORY ITEM <img src={sort} alt="sort" className="filter__sort" />
        </li>
        <li className="filter__category">
          CATEGORY <img src={sort} alt="sort" className="filter__sort" />
        </li>
        <li className="filter__status">
          STATUS <img src={sort} alt="sort" className="filter__sort" />
        </li>
        <li className="filter__qty">
          QTY <img src={sort} alt="sort" className="filter__sort" />
        </li>
        <li className="filter__warehouse">
          WAREHOUSE <img src={sort} alt="sort" className="filter__sort" />
        </li>
        <li className="filter__actions">ACTIONS</li>
      </ul>
    </div>
  );
}

export default WarehouseInventoryHeadSort;
