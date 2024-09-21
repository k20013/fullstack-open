import axios from "axios";

const URL = "http://localhost:3001/persons";

const getAll = () => {
    const request = axios.get(URL);
    return request.then(res => res.data);
};

const create = (person) => {
    const request = axios.post(URL, person);
    return request.then(res => res.data);
};

const remove = (id) => {
    const request = axios.delete(`${URL}/${id}`);
    return request.then(res => res.data);
}

const update = (id, person) => {
    const request = axios.put(`${URL}/${id}`, person);
    return request.then(res => res.data);
}

export default {
    getAll, create, remove, update
}