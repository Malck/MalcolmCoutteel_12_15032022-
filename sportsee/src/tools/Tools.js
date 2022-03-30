import Axios from "axios"

const mockee = false

/**
 * Function for User.jsx to get the id and data
 * Chart n*4 = Score
 * @param {string} id - The id of user.
 */
async function findID(id) {

    let userData = {}
    
    if (mockee === true) {
        const response = await fetch(`http://localhost:3001/Mock/${id}.json`) //call at 3001 when we start back first , then front 
        const data = await response.json()
        userData = data

    } else {
        const response = await Axios.get('http://localhost:3000/user/'+id) // host:3000 call on Backend first 
        userData = response.data.data
    }

    return userData
}

/**
 * Chart n*1 = WeightChart
 * @param {string} id - The id of user.
 */
async function getActivity(id) {



    let userData = {}
    
    if (mockee === true) {
        
        const response = await fetch(`http://localhost:3001/Mock/${id}/activity.json`)
        const data = await response.json()
        console.log("tools weightdata",data)
        userData = data

    } else {
        const response = await Axios.get('http://localhost:3000/user/'+id+'/activity') 
        userData = response.data.data
    }

    return userData
}

/**
 * Chart n*2 = Objectifs
 * @param {string} id - The id of user.
 */
async function getAverageSession(id) {

    let userData = {}
    
    if (mockee === true) {
        
        const response = await fetch(`http://localhost:3001/Mock/${id}/average-sessions.json`)
        const data = await response.json()
        userData = data

    } else {
        
        const response = await Axios.get('http://localhost:3000/user/'+id+'/average-sessions')  
        userData = response.data.data
    }

    return userData
}

/**
 * Chart n*3 = Radar
 * @param {string} id - The id of user.
 */
async function getPerf(id) {

    let userData = {}
    
    if (mockee === true) {
        
        const response = await fetch(`http://localhost:3001/Mock/${id}/performance.json`)
        const data = await response.json()
        userData = data 

    } else {
        
        const response = await Axios.get(`http://localhost:3000/user/${id}/performance`)  
        userData = response.data.data
    }
    
    return userData
}


export {
    findID,
    getAverageSession,
    getActivity,
    getPerf
}