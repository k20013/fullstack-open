import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);

  const [newName, setNewName] = useState('');
  const inputTxtHandler = (e) => setNewName(e.target.value);

  const addPerson = (e) => {
    e.preventDefault();
    e.target[0].value = "";
    setPersons([...persons, { name: newName}]);
    setNewName("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input type="text" onChange={inputTxtHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map((p, i) => {
            return <li key={p.name}>{p.name}</li>
          })
        }
      </ul>
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App