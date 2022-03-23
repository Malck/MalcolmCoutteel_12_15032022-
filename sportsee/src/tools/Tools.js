import Axios from "axios"

const mockee = true

async function findID(id) {

    let userData = {}
    
    if (mockee === true) {
        console.log("MOCKEE findID");
        const response = await fetch(`http://localhost:3001/Mock/${id}.json`) //c'est pas un json qu'on utilise nous ?!
        const data = await response.json()
        userData = data
    } else {
        const response = await Axios.get('http://localhost:3000/user/'+id) // host:3000 ou 3001 peut etre  plus 3000 comme on appel le back
        userData = response.data
    }

    console.log("USER findID: ", userData);

    return userData
}

async function getAverageSession(id) {

    let userData = {}
    
    if (mockee === true) {
        console.log("MOCKEAverageactif");
        const response = await fetch(`http://localhost:3001/Mock/${id}/average-sessions.json`)
        //const response = await fetch('../../Mock/12/average-sessions.json')
        const data = await response.json()
        userData = data
        console.log("userdata",userData)
    } else {
        const response = await Axios.get('http://localhost:3000/user/'+id+'/average-sessions')
        userData = response.data.data
    }

    return userData
}

async function getActivity(id) {

    let userData = {}
    
    if (mockee === true) {
        console.log("MOCKEE");
        const response = await fetch(`http://localhost:3001/Mock/${id}/activity.json`)
        const data = await response.json()
        userData = data.data
    } else {
        const response = await Axios.get('http://localhost:3333/user/'+id+'/activity')
        userData = response.data.data
    }

    return userData
}

async function getPerf(id) {

    let userData = {}
    
    if (mockee === true) {
        console.log("MOCKEE");
        const response = await fetch(`http://localhost:3001/Mock/${id}/performance.json`)
        const data = await response.json()
        userData = data.data
    } else {
        const response = await Axios.get('http://localhost:3000/user/'+id+'/performance')
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