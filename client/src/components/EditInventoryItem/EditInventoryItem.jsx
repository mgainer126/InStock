import "./EditInventoryItem.scss";
import back from "../../assets/Icons/arrow_back-24px.svg";

function EditInventoryItem() {
  return (
    <>
      <div class="section-header">
        <img className="section-header__img" src={back} />
        <h1 className="section-header__header">Edit Inventory Item</h1>
      </div>
      <div className="tablet">
        <div className="tablet__box1">
          <div className="main">
            <div className="main__top-section">
              <h2>Item Details</h2>
              <form className="main__form">
                <label className="label">Item Name</label>
                <input
                  className="main__item-field"
                  type="text"
                  placeholder="Television"
                ></input>
                <label className="label">Description</label>
                <textarea
                  className="main__desc-field"
                  placeholder="This 50 inch, 4K LED TV provides a crystal clear picture and vivid colors"
                ></textarea>
              </form>
              <label className="label">Category</label>
              <select className="main__category-select">
                <option value="Electronics">Electronics</option>
              </select>
            </div>
          </div>
        </div>
        <div className="tablet__box2">
          <div className="main">
            <h2>Item Availability</h2>
            <label className="label">Status</label>
            <div className="main__bottom-section">
              <div className="main__bottom-section--radio1">
                <input type="radio" value="In stock" />
                <p>In stock</p>
              </div>
              <div className="main__bottom-section--radio2">
                <input type="radio" value="Out of stock" />
                <p>Out of stock</p>
              </div>
            </div>
            <label className="label">Warehouse</label>
            <select className="main__category-select">
              <option value="Electronics">Manhattan</option>
            </select>
          </div>
        </div>
      </div>
      <div className="main__button">
        <button className="main__button--btn1">Cancel</button>
        <button className="main__button--btn2">Save</button>
      </div>
    </>
  );
}

export default EditInventoryItem;
