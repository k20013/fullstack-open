import { useState } from 'react'

import Form from './components/form';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040- 1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const renderPerson = (p) => <li key={p.name}>{`${p.name} ${p.number}`}</li>;

  const [found, setFound] = useState([]);
  const searchHandler = (e) => {
    const result = persons.filter((person) => person.name.toLowerCase().includes(e.target.value));
    setFound(result);
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with <input type="text" onChange={searchHandler} />
      </div>

      <Form state={[persons, setPersons]} />

      <h2>Numbers</h2>
      <ul>
        {
          found.length ? 
          found.map(renderPerson)
          : persons.map(renderPerson)
        }
      </ul>
    </div>
  )
}

export default App