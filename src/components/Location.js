import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Location = () => {
  const {dispatch } = useContext(AppContext);
    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    
  return (
        <div className='alert text-white alert-secondary bg-opacity-75' style={{ backgroundColor: "#9BE396" }}> Currency {
      <select name="Currency" id="Location" className='text-white bg-opacity-75' style={{ backgroundColor: "#9BE396" }} onChange={event=>changeLocation(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};
export default Location;