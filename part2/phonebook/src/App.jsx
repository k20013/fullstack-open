import { useState, useEffect } from 'react'
import './index.css';

import Notification from './components/notification';
import Filter from './components/filter';
import PersonForm from './components/person-form';
import Person from './components/person';

import personsServices from './services/persons';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [found, setFound] = useState([]); // El array de resultads de la busqueda
  const [newPerson, setNewPerson] = useState({});
  const [notification, setNotfication] = useState({ isError: false, content: "" });

  useEffect(() => {
    personsServices.getAll()
      .then(data => setPersons(data))
  }, []);

  const timer = () => { //Temporizador de la notificación
    setTimeout(() => {
      setNotfication({ isError: false, content: "" });
    }, 5000)
  }

  const searchHandler = (e) => {
    setFound(
      persons.filter((person) => person.name.toLowerCase().includes(e.target.value))
    );
  }

  const addPerson = (e) => {
    e.preventDefault(); // Evita que se recaaague la pagina
    if (!newPerson.name || !newPerson.number) { // Si fataran datos
      setNotfication({ isError: true, content: "Please, complete the formulario" });
      timer();
    }

    const repeated = persons.find((p) => p.name === newPerson.name);
    if (repeated && repeated.number !== newPerson.number) { // Actualizar el número de telefono
      confirm(`${repeated.name} is already added to phonebook, repleace the old number with a new one?`)
        && personsServices.update(repeated.id, newPerson).then((res) => {
          setNotfication({ isError: false, content: `Updated ${res.name}` });
          timer();
          personsServices.getAll()
            .then(data => setPersons(data))
        }
        ).catch(error => {
          setNotfication({ isError: true, content: `Information of ${repeated.name} has already been removed from server` });
          timer();
        })

    } else if (repeated) { // La persona ya existe
      repeated.name === "Arto Hellas" ? alert(`Arto Hellas is already added to phonebook`)
        : setNotfication({ isError: true, content: `${repeated.name} is already added to phonebook`});

    } else { // Crear la persona
      personsServices.create(newPerson)
        .then((res) => {
          setNotfication({ isError: false, content: `Added ${res.name}` });
          timer();
          personsServices.getAll()
            .then(data => setPersons(data))
        }
        ).catch(error => {
          setNotfication({ isError: true, content: error.message })
          timer();
        });
    }
    //Limpian las entradas
    e.target[0].value = "";
    e.target[1].value = "";
  }
  const newPersonNameHandler = (e) => setNewPerson({ ...newPerson, name: e.target.value });
  const newPersonNumbereHandler = (e) => setNewPerson({ ...newPerson, number: e.target.value });

  const removePersonHandler = (id) => {
    personsServices.remove(id).then(
      res => {
        setNotfication({ isError: false, content: `Deleted ${res.name}` });
        timer();
        // personsServices.getAll()
        //   .then(data => setPersons(data));
      }
    ).catch(error => {
      setNotfication({ isError: true, content: error.message});
      timer();
    }
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification notification={notification} />

      <Filter searchHandler={searchHandler} />

      <PersonForm submitHandler={addPerson} nameHandler={newPersonNameHandler} numberHandler={newPersonNumbereHandler} />

      <h2>Numbers</h2>

      <ul>
        {
          found.length ? found.map(p => <Person person={p} removeHandler={removePersonHandler} key={p.id} />)
            : persons.map(p => <Person person={p} removeHandler={removePersonHandler} key={p.id} />)
        }
      </ul>

    </div>
  )
}

export default App