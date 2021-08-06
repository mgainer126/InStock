//Passing Props to Warehouse Input for title and button text 
import WarehouseInput from '../WarehouseInput/WarehouseInput';
import './EditWarehouse.scss'
import backArrow from '../../assets/Icons/arrow_back-24px.svg';

function AddWarehouse () {
    return (
        <div className="container">
            <div className="container__edit">
            <img src={backArrow}/>
            <h1 className="container__title">Edit Warehouse</h1>
            </div>
            <WarehouseInput button={"Save"}/> 
        </div>
    
    )
}
export default AddWarehouse;