import { useState } from 'react';

import { createPerson, updatePerson } from '../services';

const Form = ({ state }) => {

    const [persons, setPersons] = state

    const [newName, setNewName] = useState('');
    const nameHandler = (e) => setNewName(e.target.value);
    const [newNumber, setNewNumber] = useState('');
    const numberHandler = (e) => setNewNumber(e.target.value);

    const addPerson = (e) => {

        // e.preventDefault(); // Evita que se recaaague la pagina

        if(!newName || !newNumber) return alert("Please, fill the form well"); // Si fataran datos

        // Si la persona ya existe ---------

        const repeated = persons.find((p) => p.name === newName);

        if(repeated && repeated.number !== newNumber) {

            confirm(`${repeated.name} is already added to phonebook, repleace the old number with a new one?`)
            && updatePerson(repeated.id, { name: newName, number: newNumber });;

        } else if(repeated) {
            newName === "Arto Hellas" ? alert(`Arto Hellas is already added to phonebook`)
            : alert(`${newName} is already added to phonebook`);

        } else {
            createPerson({ name: newName, number: newNumber }); //Crea la persona
            // setPersons([...persons, { name: newName, number: newNumber }]); // Actualiza el estado para que el cliente perciba el cambio
        }

        setNewName(""); // Limpia el estado del manejador de eventos
        e.target[0].value = ""; // Limpia la entrada de name
        e.target[1].value = ""; // Limpia la entrada de number
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input type="text" onChange={nameHandler} />
            </div>
            <div>
                number: <input type="text" onChange={numberHandler}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default Form;