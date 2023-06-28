import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const{Budget,expenses,Location}=useContext(AppContext);
    const totalExpenses = expenses.reduce((total,item)=>{
        return(total += (item.unitprice*item.quantity));
    },0);
    const remainingBudget = Budget-totalExpenses;
    return(
        <div className='alert alert-success'>
            <span>Remaining: {Location}{remainingBudget}</span>
        </div>
    )
};

export default Remaining;
