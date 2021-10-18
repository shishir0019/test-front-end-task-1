const API_URL = 'https://countriesnode.herokuapp.com/v1/'

export const GetCountriesAPI = () => {
    const data = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'POST, GET'
        }
    }
    const URL = API_URL + '/countries/';
    return fetch(URL, data).then((res) => res.json());
}

export const GetCountryByCodeAPI = (code) => {
    const data = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'POST, GET'
        }
    }
    const URL = API_URL + '/countries/' + code;
    return fetch(URL, data).then((res) => res.json());
}