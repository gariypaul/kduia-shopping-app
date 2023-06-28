import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const{expenses,dispatch,Budget,Location}=useContext(AppContext);
    
    const handleInputChange= (event)=>{
        const budget = {
            value:parseInt(event.target.value),
        };
        const totalExpenses = expenses.reduce((total,item)=>{
            return(total += (item.unitprice*item.quantity));
        },0);
        const remainingbudget = Budget - totalExpenses;
    
        if(budget.value>20000){
            const message = 'The value cannot exceed remaining funds '+Location+" "+ remainingbudget;
            alert(message);
        }else{
            dispatch({
                type: 'CHANGE_BUDGET',
                payload: budget,
            });
        }
        
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
                    step="10"
                >
                </input>
        </div>
    )
};

export default CartValue;
