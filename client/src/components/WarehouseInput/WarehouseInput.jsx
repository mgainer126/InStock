import React, {useState} from 'react' 
import './WarehouseInput.scss'


function WarehouseInput (props) {
    // const [input, setinput] = useState ({
    //     warehouseName: "",
    // })
    // updateInput (e){
    //     setInput (warehouseName = e)
    // }
    return (
        <div className="card">
        <div className="card__container"> 
        <div>
                <div className="form">
                 <h1 className="form__title">Warehouse Details</h1>
                <form className="form__container"> 
                <label className="form__label" htmlFor="name">Warehouse Name</label>
                    <input type="text" className="form__input-box"/>
                <label className="form__label" htmlFor="name">Street Address</label>
                    <input type="text" className="form__input-box"/>
                <label className="form__label" htmlFor="name">City</label>
                    <input type="text" className="form__input-box"/>
                <label className="form__label" htmlFor="name">Country</label>
                    <input type="text" className="form__input-box"/>
                </form>
            </div>

            <div className="form">
                <h1 className="form__title">Contact Details</h1>
                <form className="form__container"> 
                <label className="form__label" htmlFor="name">Contact Name</label>
                    <input type="text" className="form__input-box"/>
                <label className="form__label" htmlFor="name">Position</label>
                    <input type="text" className="form__input-box"/>
                <label className="form__label" htmlFor="name">Phone Number</label>
                    <input type="text" className="form__input-box"/>
                <label className="form__label" htmlFor="name">Country</label>
                    <input type="text" className="form__input-box"/>
               
            </form> 
            </div> 
            </div>
                <div className="button" >
                <button className="button__cancel" type="submit">Cancel</button>
                <button className="button__save" type="submit">{props.button}</button>
                </div>  
            </div>  
            </div> 
    
    )
}
export default WarehouseInput;

