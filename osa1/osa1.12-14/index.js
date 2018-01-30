import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.otsikko} </h1>
    </div>
  )
}
// Statistics huolehtii tilastojen näyttämisestä
const Statistics = (props) => {
  return (
    <table >
     <tbody>
      <tr>
        <td width="300"> {props.text} </td>
        <td width="100"> Ääniä: {props.luku} </td>
      </tr>
    </tbody>
    </table>
        )
}
const Button = (props) => (
    <button onClick={props.handleClick}>
    {props.text}
  </button>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: 0,
      pisteet: [0, 0, 0, 0, 0, 0],
    }
  }

// asetaAani in (indeksi) = nappi painettu lisätään indeksille ääni
asetaAani = ( indeksi ) => () => {
  var aanet = this.state.pisteet
  aanet[this.state.selected] = aanet[this.state.selected] +1
  this.setState({
    pisteet : aanet
  })
}

// funktio, joka asettaa selected:lle uuden arvon (indeksi väliltä 0-6)
haeRandom = ( counter, arvo, lisays ) => () => {
  this.setState ({
    selected: Math.floor(Math.random() * anecdotes.length)
  })
}

haeSuurin(array) {
    var suurin;
    var indeksi;
    for (var i = 0; i < array.length; i++) {
      if (!suurin || array[i] > suurin) {
        suurin = array[i];
        indeksi = i;
      }
    }
    return indeksi;
  }


  render() {
    return (
      <div>
        <Otsikko otsikko="ANEKDOOTIT"/>
        <Button handleClick={this.haeRandom("counterHyva", this.state.counterHyva + 1, 1)} text="Next anecdote"/>
        <Button handleClick={this.asetaAani(this.state.selected )} text ="vote"/>
        <Statistics text={this.props.anecdotes[this.state.selected]} luku = {this.state.pisteet[this.state.selected]} />
        <Otsikko otsikko="eniten ääniä: " />
        <Statistics text={this.props.anecdotes[this.haeSuurin(this.state.pisteet)]} luku = {this.state.pisteet[this.haeSuurin(this.state.pisteet)]} />

      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

// ReactDOM.render(
//  <App />,
//  document.getElementById('root')
//)
