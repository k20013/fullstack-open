import axios from "axios";

const URL = "http://localhost:3001/persons";

export const getAll = async () => {
    try {
        const res = await axios.get(URL);
        // console.log(res.data)
        return res.data;
    } catch (error) {
        return alert(error.messagge);
    }
};

export const createPerson = async (person) => {
    try {
        const res = await axios.post(URL, person);
        return res.data;
    } catch (error) {
        return alert(error.messagge);
    }
};