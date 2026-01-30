function Filters({ busqueda, setBusqueda, categoriaFiltro, setCategoriaFiltro }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Buscar por título o lugar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <select
        value={categoriaFiltro}
        onChange={(e) => setCategoriaFiltro(e.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Charla">Charla</option>
        <option value="Torneo">Torneo</option>
        <option value="Taller">Taller</option>
        <option value="Excursión">Excursión</option>
      </select>
    </div>
  )
}

export default Filters
