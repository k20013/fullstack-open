import { useState } from 'react';

const Form = ({ persons, setPersons }) => {

    const [newName, setNewName] = useState('');
  const inputHandler = (e) => setNewName(e.target.value);

    const addPerson = (e) => {
        e.preventDefault();
        e.target[0].value = "";
        setPersons([...persons, { name: newName}]);
        setNewName("");
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