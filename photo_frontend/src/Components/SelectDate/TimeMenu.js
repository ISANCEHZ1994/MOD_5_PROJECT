import React, { useState } from 'react';
//  import { Modal } from 'react-bootstrap';  //Button, InputGroup, FormControl, Form 

function TimeMenu(props){

    const [time, setTime] = useState('');
    const handleTime = (time) => setTime(time)

    return(
        
        <div >
           <input type='time' name='Appointment Time' id='appointment_time' onChange = {(e)=> handleTime(e.target.value)}>
           </input>

            {/* <button type= 'submit' onClick={()=> props.functionAsProps(time)}>  
               Yeet
            </button> */}
            
            <button type= 'submit' onClick={()=> props.functionAsProps(time)}>  
               Yeet
            </button>

           <button onClick={props.onHide}> 
               CLOSE
           </button>
        </div>
      
    )
};

export default TimeMenu;