import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';



function Photos(props){
    
    return(
        <div>
            <img src={props.url}/>
        </div>
    )
}

export default Photos;