import './App.css';
import { useState } from 'react';
import {Filter} from './Filter.js';
import {Persons} from './Persons.js';
import { PersonForm } from './PersonForm';

function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newQuery, setNewQuery] = useState('')

  const handleChange = (event) => {
    if(event.target.name === "name") setNewName(event.target.value)
    if(event.target.name === "number") setNewNumber(event.target.value)
    if(event.target.name === "query") setNewQuery(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const personAddToState = {
      name: newName,
      number: newNumber
    }
    const isIn = (person) => person.name === personAddToState.name
    if(persons.some(isIn)) window.alert(`${newName} is already added to phonebook`)
    else setPersons(persons.concat(personAddToState))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newQuery={newQuery} handleChange={handleChange} />
      <PersonForm newName={newName} handleSubmit={handleSubmit} handleChange={handleChange} />
      <h2>Numbers</h2>
      {persons.map(person => {
        if(person.name.toLowerCase().startsWith(newQuery.toLowerCase()) || newQuery === '') return <Persons key={person.name} name={person.name} number={person.number} />
        else return ""})}
    </div>
  )
}

export default App;
