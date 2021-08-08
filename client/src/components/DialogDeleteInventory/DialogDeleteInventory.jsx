import "../Footer/Footer.scss";
import "./DialogDeleteInventory.scss";
import axios from "axios";
import { API_URL } from "../../api/config";
export function DialogDeleteInventory({item,onCloseModal}) {
    const closeModal = (item = null) => {
        onCloseModal(item)
    }
    const removeItem = () => {
        axios.delete(`${API_URL}/inventories/${item.id}`).then(() => {
    closeModal(item)
})
    }
    return (
        <div className="container">
          <div className="dialog">
                <h3 className="dialog__title">Delete {item.itemName} inventory item</h3>
            <p className="dialog__description">
              Please confirm that you'd like to delete {item.itemName} from the
              inventory list. <br />
              You won't be able to undo this action
            </p>
            <div className="dialog__actions">
              <button onClick={closeModal}>Cancel</button>
              <button className="dialog__actions--red" onClick={removeItem}>Delete</button>
            </div>
          </div>
        </div>
      );
}

export default DialogDeleteInventory;
