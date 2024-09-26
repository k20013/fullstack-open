import axios from "axios";

const URL = "https://studies.cs.helsinki.fi/restcountries/api";

const getNames = () => {
    const request = axios.get(`${URL}/all`);
    return request.then(res => res.data.map(country => {
        return country.name.common;
    }));
}

const getCountry = (country) => {
    const request = axios.get(`${URL}/name/${country}`);
    return request.then(res => res.data);
}

export default {
    getNames, getCountry
}