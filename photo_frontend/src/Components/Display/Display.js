import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { deleteAppointmentHandler, handlePhotographers } from '../../store/actions';
import './Display.css'


function Display(props){

    const timeFomat  = time => {
        return new Date(time).toDateString()
    }

    const dispatch = useDispatch()
    const photographers = useSelector(state => state.photographers)
    if(!photographers.isLoaded){
        dispatch(handlePhotographers)
    }
   

    // function photographerPic(){
    //     photographers.photographers.map( photographer => {
    //         console.log(photographer)
    //     })
    // }

    return(
        <div>
            <br></br>
            <div className='appointCard'>
                <h4> Client Name: {props.client_name} </h4>
                <h4> Your ID: {props.client}</h4>
                <h4> Photographer: {props.photographer_name} </h4>
                <h4> Photographer ID: { props.photographer}</h4>
                <h4> At this date : {timeFomat(props.time)}</h4>
            </div>

            <div >
                <button onClick={() => dispatch(deleteAppointmentHandler(props.id))}>
                        CANCEL
                </button>

                {/* <button onClick={() => photographerPic()}>
                    Run Function for pic
                </button> */}

                
            </div>
            <br></br>
        </div>
        
    )
}

export default Display;