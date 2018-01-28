import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.otsikko} </h1>
    </div>
  )
}

const Keskiarvo = (props) => {
  let ka = 0;
  if (props.lkm > 0)
    ka = (props.summa / props.lkm) * 100;
  return (
    <div>
     <p> {ka} </p>
    </div>
  )
}


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      counterk: 0,
      counterh: 0,
      lkm: 0,
      summa: 0,
    }
  }

  render() {
    return (
      <div>
        <Otsikko otsikko="UNICAFE"/>
        <button onClick={() => this.setState({
          counter: this.state.counter + 1,
           lkm: this.state.lkm + 1,
            summa: this.state.summa + 1})}>
          Hyvä
        </button>
        <button onClick={() => this.setState({
          counterk: this.state.counterk + 1,
          lkm: this.state.lkm + 1,
          summa: this.state.summa + 0})}>
          Neutraali
        </button>
        <button onClick={() => this.setState({
          counterh: this.state.counterh + 1,
          lkm: this.state.lkm + 1,
          summa: this.state.summa - 1})}>
          Huono
        </button>
        <button onClick={() => this.setState({
          counter: 0, counterh: 0, counterk:0, lkm:0, summa:0 })}>
          Nollaa laskurit
        </button>
        <div>
          <Otsikko otsikko="Statistiikka"/>
          <p> Hyvä: {this.state.counter}</p>
          <p> Neutraali: {this.state.counterk}</p>
          <p> Huono: {this.state.counterh}</p>
          <p> Keskiarvo: {this.state.summa / this.state.lkm} </p>
          <p> Positiivisia:</p> <Keskiarvo summa= {this.state.counter} lkm={this.state.lkm} />
          <p> % </p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
