import React from 'react';
import axios from 'axios';
import personService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellankoukku' ,number: '123456' },
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: 'anna uusi nimi..' ,
      newNumber: '+358...',// kontrolloitu syötekomponentti
      filter: ''
    }
    console.log('constructor')
  }

  componentDidMount() {
    personService
    .getAll()
    .then(response => {
      this.setState({ persons: response })
    })
  }


  addName = (event) => {
    event.preventDefault()
    const sameIndex = this.state.persons.findIndex(olio => olio.name === this.state.newName );
    if (sameIndex < 0){
      const nameObject = {
        name: this.state.newName,
        number: this.state.newNumber
      }

      personService
      .create(nameObject)
      .then(response => {
        this.setState({
          persons: this.state.persons.concat(response),
          newName: ''
        })
      })
    }
  }


  handleNameChange = (event) => {
    console.log("handleNameChange:" , event.target.value)
    this.setState({ newName: event.target.value })
  }
  handleNumberChange = (event) => {
    console.log("handleNumberChange:" , event.target.value)
    this.setState({ newNumber: event.target.value })
  }
  handleFilterChange = (event) => {
    console.log("handleFilterChange:" , event.target.value)
    this.setState({ filter: event.target.value })
  }

  render() {
    const namesToShow = this.state.persons.filter(olio => olio.name.match(this.state.filter));
    return (
      <div>
      <h2>Hakutekijä</h2>
      <div>
      hakutekijä: <input
      value={this.state.filter}
      onChange={this.handleFilterChange}
      />
      </div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={this.addName}> {/* nappi */}
      <div>
      nimi: <input
      value={this.state.newName} // alustus
      onChange={this.handleNameChange} // muutettu dataa
      />
      </div>
      <div>
      numero: <input
      value={this.state.newNumber} // alustus
      onChange={this.handleNumberChange} // muutettu dataa
      />
      </div>
      <div>
      <button type="submit">lisää</button>
      </div>
      </form>
      <h2>Numerot</h2>
      <ul>
      {namesToShow.map(person => <li key={person.name}> nimi: {person.name} puh: {person.number} <button type="submit" onClick={this.delName}>Poista</button></li>)}

      </ul>
      </div>
    )
  }
}
export default App;
