import React from 'react';
import ReactDOM from 'react-dom';
import Kurssi from './components/kurssi'

const Otsikko = (props) => {
  return (
    <div>
    <h1>{props.otsikko} </h1>
    </div>
  )
}

const App = () => {
  const kurssi = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
    <Otsikko otsikko="Opetusohjelma" />
    {kurssi.map(yksi=>
      <Kurssi key={yksi.id} kurssinimi={yksi.nimi} kurssiosat={yksi.osat}/>
    )}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
