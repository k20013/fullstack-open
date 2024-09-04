import { useState } from 'react'

import Form from './components/Form';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);

  return (
    <div>
      <h2>Phonebook</h2>

      <Form persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <ul>
        {
          persons.map((p) => {
            return <li key={p.name}>{p.name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App