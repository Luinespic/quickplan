import { useEffect, useState } from 'react'
import eventosData from './data/eventos.json'
import EventCard from './components/EventCard'
import EventDetail from './components/EventDetail'
import Favorites from './components/Favorites'
import Filters from './components/Filters'

function App() {
  const [eventos, setEventos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const [eventoSeleccionado, setEventoSeleccionado] = useState(null)
  const [favoritos, setFavoritos] = useState([])

  const [busqueda, setBusqueda] = useState('')
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas')

  // Carga de datos simulando API
  useEffect(() => {
    setTimeout(() => {
      if (eventosData.length > 0) {
        setEventos(eventosData)
        setCargando(false)
      } else {
        setError('No hay eventos disponibles')
        setCargando(false)
      }
    }, 1000)
  }, [])

  const añadirFavorito = (evento) => {
    if (!favoritos.some(f => f.id === evento.id)) {
      setFavoritos([...favoritos, evento])
    }
  }

  const quitarFavorito = (id) => {
    setFavoritos(favoritos.filter(f => f.id !== id))
  }

  const esFavorito = eventoSeleccionado
    ? favoritos.some(f => f.id === eventoSeleccionado.id)
    : false

  // Filtrar eventos según búsqueda y categoría
  const eventosFiltrados = eventos.filter(evento => {
    const texto = busqueda.toLowerCase()
    const tituloLugar = (evento.titulo + ' ' + evento.lugar).toLowerCase()
    const coincideBusqueda = tituloLugar.includes(texto)
    const coincideCategoria = categoriaFiltro === 'Todas' || evento.categoria === categoriaFiltro
    return coincideBusqueda && coincideCategoria
  })

  // Mostrar pantalla de detalle
  if (eventoSeleccionado) {
    return (
      <div style={{ padding: '20px' }}>
        <EventDetail
          evento={eventoSeleccionado}
          onVolver={() => setEventoSeleccionado(null)}
          onFavorito={añadirFavorito}
          esFavorito={esFavorito}
        />
      </div>
    )
  }

  // Pantalla principal
  if (cargando) return <p>Cargando...</p>
  if (error) return <p>{error}</p>

  return (
    <div style={{ padding: '20px' }}>
      <h1>Agenda de eventos</h1>
      <p>Mostrando {eventosFiltrados.length} de {eventos.length} eventos</p>

      {/* Favoritos */}
      <div style={{ marginBottom: '20px' }}>
        <Favorites favoritos={favoritos} onQuitar={quitarFavorito} />
      </div>

      {/* Buscador y filtro */}
      <Filters
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        categoriaFiltro={categoriaFiltro}
        setCategoriaFiltro={setCategoriaFiltro}
      />

      {/* Lista de eventos */}
      <div>
        {eventosFiltrados.map(evento => (
          <EventCard
            key={evento.id}
            evento={evento}
            onVerDetalle={setEventoSeleccionado}
          />
        ))}
      </div>
    </div>
  )
}

export default App
