import { useState } from 'react';

const Form = ({ state }) => {

    const [persons, setPersons] = state

    const [newName, setNewName] = useState('');
    const nameHandler = (e) => setNewName(e.target.value);

    const [newNumber, setNewNumber] = useState('');
    const numberHandler = (e) => setNewNumber(e.target.value);

    const addPerson = (e) => {

        e.preventDefault(); // Evita que se recaaague la pagina
        
        if(persons.filter((element) => element.name === newName).length) {

            newName === "Arto Hellas" ? alert(`Arto Hellas is already added to phonebook`)
            : alert(`${newName} is already added to phonebook`);

        } else {
            setPersons([...persons, { name: newName, number: newNumber }]);
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