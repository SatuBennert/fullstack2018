import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
  return (
    <div>
      <p>{props.kurssinimi} </p>
    </div>
  )
}

const Osa = (props) => {
  return (
    <div>
     <p> {props.sisnimi} sisältää {props.lkm} tehtävää </p>
     </div>
  )
}

const Sisalto = (props) => {

    return (
    <div>
    <Osa sisnimi = {props.osat[0].nimi} lkm = {props.osat[0].tehtavia} />
    <Osa sisnimi = {props.osat[1].nimi} lkm ={props.osat[1].tehtavia} />
    <Osa sisnimi = {props.osat[2].nimi} lkm ={props.osat[2].tehtavia} />

      </div>
  )
}

const Yhteensa = (props) => {
    let kaikki = props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia
       return (
    <div>
     <p> Yhteensä {kaikki} tehtävää </p>
     </div>
  )
}


const App = () => {

  const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]


      return (
      <div>
      <Otsikko kurssinimi = {kurssi}/>
      <Sisalto osat = {osat} />
      <Yhteensa osat = {osat} />

      </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
