import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle,FaPlusCircle } from 'react-icons/fa';
const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);
    const handleDeleteItem = () => {
        const item = {
            name: props.name,
            quantity:10,
        };
        dispatch({
            type: 'RED_QUANTITY',
            payload: item,
        });
    };
    const handleIncreaseItem = () => {
        const item = {
            name: props.name,
            quantity:10,
        };
        dispatch({
            type: 'ADD_QUANTITY',
            payload: item,
        });
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{props.quantity}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncreaseItem}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaMinusCircle></td>
        </tr>
    );
};
export default ExpenseItem;