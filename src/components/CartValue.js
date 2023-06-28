import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const{dispatch,Budget,Location}=useContext(AppContext);
    
    const handleInputChange= (event)=>{
        const budget = {
            value:parseInt(event.target.value),
        };
        dispatch({
            type: 'CHANGE_BUDGET',
            payload: budget,
        });
    };

    return(
        <div className='alert alert-dark'>
            <span>Budget: {Location}</span>
                <input
                    type="number"
                    id="budget"
                    value = {Budget}
                    onChange={handleInputChange}
                    min ="0"
                    max="20000"
                    step="10"
                >
                </input>
        </div>
    )
};

export default CartValue;
