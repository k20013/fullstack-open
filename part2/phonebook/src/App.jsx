import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/filter';
import Form from './components/person-form';
import Persons from './components/persons';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [found, setFound] = useState([]); // El array de resultads de la busqueda

  useEffect(() => {
    console.log("effect");

    axios.get("http://localhost:3001/persons").then(response => {
      console.log('promise fulfilled', response)
      setPersons(response.data)})
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