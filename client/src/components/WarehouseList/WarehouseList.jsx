import deleteicon from "../../assets/Icons/delete_outline-24px.svg";
import editicon from "../../assets/Icons/edit-24px.svg";
import scroll from "../../assets/Icons/sort-24px.svg";
import arrow from "../../assets/Icons/chevron_right-24px.svg";
import "./WarehouseList.scss";

function WarehouseList() {
  return (
    <div className="main">
      <h1 className="main__title">Warehouses</h1>
      <div className="main__top">
        <h1 className="main__title--tablet">Warehouses</h1>
        <div className="main__right-wrap">
          <form className="main__search">
            <input
              className="main__search-box"
              type="text"
              placeholder="Search..."
              required
            ></input>
          </form>
          <div className="btn-wrap">
            <button className="main__btn-wrap--btn">+ Add New Warehouse</button>
          </div>
        </div>
      </div>
      <div className="title-bar">
        <div className="title-bar__position">
          <p>WAREHOUSE</p>
          <img className="scroll" src={scroll} />
        </div>
        <div className="title-bar__position">
          <p>CONTACT NAME</p>
          <img className="scroll" src={scroll} />
        </div>
        <div className="title-bar__position">
          <p>ADDRESS</p>
          <img className="scroll" src={scroll} />
        </div>
        <div className="title-bar__position">
          <p>CONTACT INFORMATION</p>
          <img className="scroll" src={scroll} />
        </div>
        <p>ACTIONS</p>
      </div>
      <div className="section-wrapper">
        <div className="main__warehouse-info">
          <div className="main__warehouse-info--warehouse">
            <p className="main__warehouse-info--warehouse-title">WAREHOUSE</p>
            <div className="arrowcontainer">
              <p className="main__warehouse-info--warehouse-title-txt">
                Manhattan
              </p>
              <img className="arrow" src={arrow} />
            </div>
          </div>
          <div className="main__warehouse-info--bottom">
            <p className="main__warehouse-info--contact-title">CONTACT NAME</p>

            <p className="main__warehouse-info--contact">Parmin Aujla</p>
          </div>
        </div>

        <div className="main__warehouse-info2">
          <div className="main__warehouse-info2--address">
            <p className="main__warehouse-info2--address-title">ADDRESS</p>
            <p>503 Broadway, New York, USA</p>
          </div>

          <div className="main__warehouse-info2--info-contact">
            <p className="main__warehouse-info2--info-title">
              CONTACT INFORMATION:
            </p>
            <p className="main__warehouse-info2--info-txt">
              +1 (647) 504-0911 glyon@instock.com
            </p>
          </div>
        </div>
        <div className="icon-row">
          <img src={deleteicon} />
          <img src={editicon} />
        </div>
      </div>
    </div>
  );
}

export default WarehouseList;
