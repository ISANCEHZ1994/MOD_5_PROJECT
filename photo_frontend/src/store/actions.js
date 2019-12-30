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
        // headers: {
        //     Authorization: `Bearer ${localStorage.token}`
        // }
    })
    .then( resp => resp.json() )
    .then( appointments => { // I'm sending appointments UP to handleAppointAsnc
    // console.log( appointments )
    // debugger
        dispatch(handleAppointAsnc(appointments)) // the method 
    })
}

// CLIENT WORK <----------------------------------
export const handleClientAsnc = clients =>{
    return { type: "FETCH_CLIENTS", payload: clients}
}

export const handleClients = dispatch => {
    fetch( clientURL, {
        method: "GET"
    })
    .then( resp => resp.json() )
    .then( clients => {
        dispatch(handleClientAsnc(clients))
    })
}

// PHOTOGRAPHERS WORK <----------------------------------

export const handlePhotographerAsnc = photographers => {
    return { type: "FETCH_PHOTOGRAPHER", payload: photographers}
}

export const handlePhotographers = dispatch => {
    fetch( photographerURL, {
        method: "GET"
    })
    .then( resp => resp.json() )
    .then( photographers => {
        dispatch(handlePhotographerAsnc(photographers))
    })
}

// PHOTOS WORK <----------------------------------------
export const handlePhotosAsnc = photos => {
    return { type: "FETCH_PHOTOS", payload: photos}
}

export const handlePhotos = dispatch => {
    fetch ( photosURL, {
       method: "GET" 
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
        method: "GET"
    })
    .then( resp => resp.json())
    .then( addresses => {
        dispatch(handleAddressAscn(addresses))
    })
}