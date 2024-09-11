import { useState, useEffect } from 'react'

import Filter from './components/filter';
import Form from './components/person-form';
import Persons from './components/persons';

import { getAll } from './services';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [found, setFound] = useState([]); // El array de resultads de la busqueda

  useEffect(() => {
    getAll()
    .then(data => setPersons(data))
  }, [])

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