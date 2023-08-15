import axios from 'axios'

export async function getRoutesFromApi(startCity, destination,flightDate) {
 
    console.log(flightDate);
    const baseURL = "http://localhost:8080/booking/"
    let incoming = await axios.post(baseURL, { startCity, destination,flightDate })
    return incoming
}