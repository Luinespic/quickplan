function EventDetail({ evento, onVolver, onFavorito, esFavorito }) {
  return (
    <div>
      <h2>{evento.titulo}</h2>
      <p><strong>Categoría:</strong> {evento.categoria}</p>
      <p><strong>Fecha:</strong> {evento.fecha}</p>
      <p><strong>Lugar:</strong> {evento.lugar}</p>
      <p>{evento.descripcion}</p>

      <button onClick={onVolver} style={{ marginRight: '10px' }}>
        Volver
      </button>

      <button onClick={() => onFavorito(evento)} disabled={esFavorito}>
        {esFavorito ? 'En favoritos' : 'Añadir a favoritos'}
      </button>
    </div>
  )
}

export default EventDetail
