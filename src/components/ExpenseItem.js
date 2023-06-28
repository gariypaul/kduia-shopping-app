import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle,FaPlusCircle,FaTimesCircle } from 'react-icons/fa';
const ExpenseItem = (props) => {
    const { Budget,expenses,dispatch, Location} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total,item)=>{
        return(total += (item.unitprice*item.quantity));
    },0);
    const remainingbudget = Budget - totalExpenses;


    const handleDecreaseItem = () => {
        const item = {
            name: props.name,
            quantity:10,
        };

        dispatch({
            type: 'RED_QUANTITY',
            payload: item,
        });
    };
    const handleDeleteItem = ()  =>{
        const item = {
            name:props.name,
        };
        dispatch({
            type:'DELETE_ITEM',
            payload:item,
        })

    }
    const handleIncreaseItem = () => {
        const item = {
            name: props.name,
            quantity:10,
        };
        if(item.quantity>remainingbudget){
            alert("You cannot reduce the budget value lower than the spending");
        }else{
            dispatch({
                type: 'ADD_QUANTITY',
                payload: item,
            });
        }
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{props.quantity}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncreaseItem}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDecreaseItem}></FaMinusCircle></td>
        <td><FaTimesCircle size='1.2em' color="gray" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};
export default ExpenseItem;