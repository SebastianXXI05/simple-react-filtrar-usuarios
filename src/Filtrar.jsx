import infoUsuario from './usuarios.json'
import Usuarios from './Usuarios'

function Filtrar({ check1, check2, all }) {
  const filtrar = () => {
    if (all && !check1 && !check2) {
      return infoUsuario
    }
    else if (check1 && check2 && !all) {
      return infoUsuario.filter(e => e.premiun && e.colombiano)
    }
    else if (check1 && !check2 && !all) {
      return infoUsuario.filter(e => e.premiun && !e.colombiano)
    }
    else if (check2 && !check1 && !all) {
      return infoUsuario.filter(e => e.colombiano && !e.premiun)
    }
    else if (!check1 && !check2 && !all) {
      return infoUsuario.filter(e => !e.colombiano && !e.premiun)
    }
    else {
      return []
    }
  }
  const datos = filtrar()

  return (
    <div>
      <h2>Resultados: {datos.length === infoUsuario.length ? datos.length-1 : datos.length}</h2>
      <div>
        {datos.map(e => <Usuarios key={e.id} usuario={e} />)}
      </div>
    </div>
  )
}

export { Filtrar }