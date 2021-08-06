//Passing Props to Warehouse Input for title and button text 
import WarehouseInput from '../WarehouseInput/WarehouseInput';

function AddWarehouse () {
    return (
        <div>
            <h1>Add New Warehouse</h1>
            <WarehouseInput button={"Add Warehouse"}/> 
        </div>
    
    )
}
export default AddWarehouse;