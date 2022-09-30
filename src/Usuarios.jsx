import './App.css'

const Usuarios = ({usuario}) => {

  return (
    <div className='tarjeta-usuario'>
      <h2>nombre: {usuario.nombre}</h2>
      <p>edad: {usuario.edad}</p>
      <h3>Etiquetas: </h3>
      {
        !usuario.premiun && !usuario.colombiano ? <p>Sin etiquetas</p> :
        usuario.premiun && usuario.colombiano ? <p>Premiun, Colombiano</p> :
        usuario.premiun ? <p>Premiun</p>:
        usuario.colombiano ? <p>Colombiano</p>:
        null

      }
    </div>
  )
}

export default Usuarios