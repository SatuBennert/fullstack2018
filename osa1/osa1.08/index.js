import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.otsikko} </h1>
    </div>
  )
}

const Statistic = (props) => {
  let ka = 0;
  if (props.lkm > 0)
    ka = ((props.summa / props.lkm) * 100).toFixed(1);
  return (
    <div>
     <p> {props.teksti} {ka} %</p>
    </div>
  )
}

// Statistics huolehtii tilastojen näyttämisestä
const Statistics = (props) => {
  return (
    <p> {props.text} {props.luku}</p>
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
      counterHyva: 0,
      counterKeskin: 0,
      counterHuono: 0,
      lkm: 0,
      summa: 0,
    }
//    this.asetaArvoon = this.asetaArvoon.bind(this)
  }
// asetaArvoon [counter] - muista hakasulut
  asetaArvoon = ( counter, arvo, lisays) => () => {
  //  console.log("counter: ", counter, " arvo: ", arvo, " lisays: ", lisays);
  this.setState({
    [counter]: arvo ,
    lkm: this.state.lkm +1,
    summa: this.state.summa + lisays} )
}

  render() {
    return (
      <div>
        <Otsikko otsikko="UNICAFE"/>
        <Button handleClick={this.asetaArvoon("counterHyva", this.state.counterHyva + 1, 1)} text="Hyvä"/>
        <Button handleClick={this.asetaArvoon("counterKeskin", this.state.counterKeskin + 1, 0)} text="Keskinkertainen"/>
        <Button handleClick={this.asetaArvoon("counterHuono", this.state.counterHuono + 1, -1)} text ="Huono"/>

        <button onClick={() => this.setState({
          counterHyva: 0, counterKeskin: 0, counterHuono:0, lkm:0, summa:0 })}>
          Nollaa laskurit
        </button>
        <div>
          <Otsikko otsikko="Statistiikka"/>
          <Statistics text="Hyvä: " luku = {this.state.counterHyva} />
          <Statistics text="Keskinkertainen: " luku={this.state.counterKeskin}/>
          <Statistics text="Huono: " luku={this.state.counterHuono}/>
          <Statistics text="Keskiarvo: " luku={this.state.summa / this.state.lkm} />
          <Statistic  teksti="Hyvien osuus: " summa= {this.state.counterHyva} lkm={this.state.lkm} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
