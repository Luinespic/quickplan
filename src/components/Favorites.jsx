function Favorites({ favoritos, onQuitar }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: '#f0f0f0'
    }}>
      <h3>Favoritos</h3>
      {favoritos.length === 0 && <p>No hay favoritos</p>}
      <ul>
        {favoritos.map(f => (
          <li key={f.id} style={{ marginBottom: '5px' }}>
            {f.titulo}
            <button
              onClick={() => onQuitar(f.id)}
              style={{ marginLeft: '10px' }}
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites
