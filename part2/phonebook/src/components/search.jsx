import { useState } from "react";

const Search = ({ state }) => {

    const [persons, setPersons] = state;

    return (
        <div>
            filter shown with <input type="text" />
        </div>
    )
}
export default Search