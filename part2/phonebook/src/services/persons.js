import axios from "axios";

const URL = "http://localhost:3001/persons";

const getAll = async () => {
    try {
        const res = await axios.get(URL);
        // console.log(res.data)
        return res.data;
    } catch (error) {
        return alert(error.messagge);
    }
};

const create = async (person) => {
    try {
        const res = await axios.post(URL, person);
        return res;
    } catch (error) {
        return alert(error.messagge);
    }
};

const remove = async (id) => {
    try {
        const res = await axios.delete(`${URL}/${id}`);
        return res.data;
    } catch (error) {
        return alert(error.message);
    }
}

const update = async (id, person) => {
    try {
        const res = await axios.put(`${URL}/${id}`, person);
        return res.data;
    } catch (error) {
        return alert(error.message);
    }
}

export default {
    getAll, create, remove, update
}