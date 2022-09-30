import './App.css'
import { useState } from 'react'
import { Filtrar} from './Filtrar'

function App() {

  const [checkedState, setCheckedState] = useState([true, false, false])

  const handleOnChange = (pos) => {
    const updateChecked = checkedState.map((item, i) => pos === i ? !item : item)
    setCheckedState(updateChecked)
  }

  return (
    <div className="App">
      {
        checkedState.map((e, i) => {
          const nombre = i === 1 ? 'Colombiano' : i === 2 ? 'Premiun': 'Todos'

          return (
            <div key={i}>
              <input
                type='checkbox'
                checked={checkedState[i]}
                name={nombre}
                id={`checkbox-${i}`}
                onChange={() => { handleOnChange(i) }}
              />
              <label htmlFor={`checkbox-${i}`}>{nombre}</label>
              <br />
            </div>
          )
        })
      }
      <h1>Usuarios:</h1>
      <Filtrar check1={checkedState[2]} check2={checkedState[1]} all={checkedState[0]} />
    </div>
  )
}

export default App
