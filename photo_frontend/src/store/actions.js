const appointmentURL = 'http://localhost:3000/appointments'
const clientURL = 'http://localhost:3000/clients'
const photographerURL = 'http://localhost:3000/photographers'
const photosURL = 'http://localhost:3000/photos'
const addressURL = 'http://localhost:3000/addresses'

// APPOINTMENT WORK <----------------------------------
export const handleAppointAsnc = (appointments) => {
    // console.log( appointments )
    // debugger
    return { type: "FETCH_APPOINTS", payload: appointments} // does not have to be called payload 
}

// this method goes first THEN the one on top
export const handleAppointments = dispatch => {
    // debugger
    fetch( appointmentURL, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then( resp => resp.json() )
    .then( appointments => { // I'm sending appointments UP to handleAppointAsnc
    // console.log( appointments )
    // debugger
        dispatch(handleAppointAsnc(appointments)) // the method 
    })
}

export const sendAppointment = info => {
    return { type: "SAVE_APPOINT", payload: info}
}

export const sendAppointHandlerAsync = newAppointment => {
    return { type: "CREATE_APPOINT", payload: newAppointment}
}

export const sendAppointHandler = ( time,data ) =>{
    // console.log(data,time)
    // debugger
    return dispatch =>{
        fetch( appointmentURL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                'appointment':{
                    photographer_id: data.selectedPhotographer.id,
                    client_id: localStorage.id,
                    time: `Jan ${data.day} 2020 ${time}:00`
                },
                'time': `Jan ${data.day} 2020 ${time}:00`
            })
        })
        .then( resp => resp.json() )
        .then( newAppointment => {
            console.log(newAppointment)
            // debugger
            dispatch(sendAppointHandlerAsync(newAppointment))
        })
    }
}

export const deleteApppointmentAsync = destroyApppoint_id =>{
    return { type: "DELETE_APPOINT", payload: destroyApppoint_id}
}

export const deleteAppointmentHandler = (appointment_id) => {
    return dispatch =>{
    fetch(appointmentURL + `/${appointment_id}`,{
        method: "DELETE",
        headers:{
            Authorization: `Bearer ${localStorage.token}`,
            'Content-Type' : 'application/json'
            },
        
    }, dispatch(deleteApppointmentAsync(appointment_id)))
}
}

// export const saveADate = info => {
//     return { type: "SAVE_DATE", payload: info}
// }

// CLIENT WORK <----------------------------------
export const handleClientAsnc = clients =>{
    return { type: "FETCH_CLIENTS", payload: clients}
}

export const handleClients = dispatch => {
    fetch( clientURL, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then( resp => resp.json() )
    .then( clients => {
        dispatch(handleClientAsnc(clients))
    })
}

// this is to create client
export const createClient = (e, history) => {
    e.preventDefault()
    fetch(clientURL,{
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
    body: JSON.stringify({
        "client":{
            name: e.target[1].value,
            email: e.target[2].value,
            password: e.target[4].value,
            phone_number: e.target[3].value
        }
    })
    })
    .then(res => res.json())
    .then(clientInfo => {
        localStorage.email = clientInfo.email
        localStorage.id = clientInfo.id
        localStorage.token = clientInfo.token
        if(clientInfo.token){
            history.push('/client_dashboard')
        }
    })
}

// this is to remember/login client
export const loginClient = (obj, history) => {
    fetch('http://localhost:3000/login',{
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            email: obj[1].value,
            password: obj[2].value
        })
    })
    .then( resp => resp.json() )
    .then( clientInfo => {
        localStorage.email = clientInfo.email
        localStorage.id = clientInfo.id
        localStorage.token = clientInfo.token
        if(clientInfo.token){
            history.push('/appointments_dashboard')
        }
    })
}


// PHOTOGRAPHERS WORK <----------------------------------

export const handlePhotographerAsnc = photographers => {
    return { type: "FETCH_PHOTOGRAPHER", payload: photographers}
}

export const handlePhotographers = dispatch => {
    fetch( photographerURL, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${localStorage.token}`
        }
    })
    .then( resp => resp.json() )
    .then( photographers => {
        dispatch(handlePhotographerAsnc(photographers))
    })
}

export const selectPhotographer = id => {
    return { type: "SELECT_PHOTOGRAP", payload: id}

}



// PHOTOS WORK <----------------------------------------
export const handlePhotosAsnc = photos => {
    return { type: "FETCH_PHOTOS", payload: photos}
}

export const handlePhotos = dispatch => {
    fetch ( photosURL, {
       method: "GET",
       headers: {
        Authorization: `Bearer ${localStorage.token}`
    }
    })
    .then( resp => resp.json())
    .then( photos => {
        dispatch(handlePhotosAsnc(photos))
    })
}

// ADDRESSES WORK <---------------------------------------
export const handleAddressAscn = addresses => {
    return { type: "FETCH_ADDRESS", payload: addresses}
}

export const handleAddress = dispatch => {
    fetch(addressURL, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then( resp => resp.json())
    .then( addresses => {
        dispatch(handleAddressAscn(addresses))
    })
}