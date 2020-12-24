import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendAppointHandler } from '../../store/actions';

function TimeMenu(props){

    const [time, setTime] = useState('');

    const handleTime = (time) => setTime(time)
    
    const dispatch = useDispatch()
    
    return(
        <div>
           <input type='time' name='Appointment Time' id='appointment_time' onChange = {(e)=> handleTime(e.target.value)}>
           </input>
            <button type= 'submit' onClick={()=> { dispatch(sendAppointHandler(time, props))
                                                    props.history.push('/appointments_dashboard')}}>  
               CONFIRM
            </button>

           <button onClick={props.onHide}> 
               CLOSE
           </button>
        </div>
      
    )
};

export default TimeMenu;