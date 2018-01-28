import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.otsikko} </h1>
    </div>
  )
}


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      counterk: 0,
      counterh: 0
    }
  }

  render() {
    return (
      <div>
        <Otsikko otsikko="UNICAFE"/>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          Hyvä
        </button>
        <button onClick={() => this.setState({counterk: this.state.counterk + 1})}>
          Keskinkertainen
        </button>
        <button onClick={() => this.setState({counterh: this.state.counterh + 1})}>
          Huono
        </button>
        <button onClick={() => this.setState({ counter: 0, counterh: 0, counterk:0 })}>
          Nollaa laskurit
        </button>
        <div>
          <Otsikko otsikko="Statistiikka"/>
          <p> Hyvä: {this.state.counter}</p>
          <p> Keskinkertainen: {this.state.counterk}</p>
          <p> Huono: {this.state.counterh}</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
