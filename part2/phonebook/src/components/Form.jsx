import { useState } from 'react';

const Form = ({ persons, setPersons }) => {

    const [newName, setNewName] = useState('');
    const inputHandler = (e) => setNewName(e.target.value);

    const addPerson = (e) => {

        e.preventDefault(); // Evita que se recaaague la pagina
        
        if(persons.filter((element) => element.name === newName).length) {

            newName === "Arto Hellas" ? alert(`Arto Hellas is already added to phonebook`)
            : alert(`${newName} is already added to phonebook`);

        } else {
            setPersons([...persons, { name: newName }]);
        }

        setNewName(""); // Limpia el estado del manejador de eventos
        e.target[0].value = ""; // Limpia la entrade de texto
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input type="text" onChange={inputHandler} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default Form;