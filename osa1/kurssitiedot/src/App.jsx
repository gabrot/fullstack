const Header = ({ kurssi }) => <h1>{kurssi}</h1>

const Part = ({ nimi, tehtavia }) => (
  <p>{nimi} {tehtavia}</p>
)

const Content = ({ osat }) => (
  <div>
    {osat.map((osa, index) => (
      <Part key={index} nimi={osa.nimi} tehtavia={osa.tehtavia} />
    ))}
  </div>
)

const Total = ({ osat }) => {
  const total = osat.reduce((sum, osa) => sum + osa.tehtavia, 0)
  return <p>Yhteensä {total} tehtävää</p>
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    { nimi: 'Reactin perusteet', tehtavia: 10 },
    { nimi: 'Tiedonvälitys propseilla', tehtavia: 7 },
    { nimi: 'Komponenttien tila', tehtavia: 14 }
  ]

  return (
    <div>
      <Header kurssi={kurssi} />
      <Content osat={osat} />
      <Total osat={osat} />
    </div>
  )
}

export default App