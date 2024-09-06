import { useState } from 'react'

import Form from './components/Form';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040- 1234567' }
  ]);

  return (
    <div>
      <h2>Phonebook</h2>

      <Form persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <ul>
        {
          persons.map((p) => {
            return <li key={p.name}>{`${p.name} ${p.number}`}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App