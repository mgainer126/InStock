import deleteicon from "../../assets/Icons/delete_outline-24px.svg";
import editicon from "../../assets/Icons/edit-24px.svg";
import arrow from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";

function Warehouses({ warehouseList }) {
  return (
    <div>
      {warehouseList.map((data) => {
        return (
          <div className="section-wrapper">
            <div className="main__warehouse-info">
              <div className="main__warehouse-info--warehouse">
                <p className="main__warehouse-info--warehouse-title">
                  WAREHOUSE
                </p>
                <div className="arrowcontainer">
                  <p className="main__warehouse-info--warehouse-title-txt">
                    <Link to={`/details/${data.id}`}>{data.name}</Link>
                  </p>
                  <img className="arrow" src={arrow} />
                </div>
              </div>
              <div className="main__warehouse-info--bottom">
                <p className="main__warehouse-info--contact-title">
                  CONTACT NAME
                </p>
                <p className="main__warehouse-info--contact">
                  {data.contact.name}
                </p>
              </div>
            </div>
            <div className="main__warehouse-info2">
              <div className="main__warehouse-info2--address">
                <p className="main__warehouse-info2--address-title">ADDRESS</p>
                <p>{data.address}</p>
              </div>
              <div className="main__warehouse-info2--info-contact">
                <p className="main__warehouse-info2--info-title">
                  CONTACT INFORMATION:
                </p>
                <p className="main__warehouse-info2--info-txt">
                  {data.contact.phone}
                  <br></br>
                  {data.contact.email}
                </p>
              </div>
            </div>
            <div className="icon-row">
              <img src={deleteicon} />
              <img src={editicon} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Warehouses;
