function EventCard({ evento, onVerDetalle }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      backgroundColor: '#fff'
    }}>
      <h3>{evento.titulo}</h3>
      <p><strong>Categoría:</strong> {evento.categoria}</p>
      <p><strong>Fecha:</strong> {evento.fecha}</p>
      <p><strong>Lugar:</strong> {evento.lugar}</p>
      <button onClick={() => onVerDetalle(evento)}>
        Ver detalle
      </button>
    </div>
  )
}

export default EventCard
