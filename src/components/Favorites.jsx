function Favorites({ favoritos, onQuitar }) {
  return (
    <div className="favorites">
      <h3>Favoritos</h3>
      {favoritos.length === 0 && <p>No hay favoritos</p>}
      <ul>
        {favoritos.map(f => (
          <li key={f.id}>
            {f.titulo}
            <button onClick={() => onQuitar(f.id)} style={{ marginLeft: '10px' }}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites
