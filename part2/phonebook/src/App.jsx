import { useState } from 'react'

import Filter from './components/filter';
import Form from './components/person-form';
import Persons from './components/persons';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040- 1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [found, setFound] = useState([]); // El array de resultads de la busqueda

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter setFound={setFound} persons={persons} />

      <Form state={[persons, setPersons]} />

      <h2>Numbers</h2>

      <Persons persons={persons} found={found} />
      
    </div>
  )
}

export default App