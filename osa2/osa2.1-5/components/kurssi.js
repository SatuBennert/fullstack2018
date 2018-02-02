import React from 'react'

// osat = [4, 5, 6]
const Summa = ({osat}) => {
  const total = osat.reduce(
    ( acc, cur ) => acc + cur)
    return (
      <h1> Yhteensä tehtäviä: {total}</h1>
    )
  }

  const Kurssi = ({ kurssinimi, kurssiosat }) => {
    const tehtavat=kurssiosat.map(yksi => yksi.tehtavia)
    return (
      <div>
      <h1>{kurssinimi}</h1>
      <ul>
      {kurssiosat.map(osa => <li key={osa.id}>{osa.nimi} teht:{osa.tehtavia}</li>)}
      </ul>
      <Summa osat={tehtavat} />
      </div>
    )
  }

  export default Kurssi
