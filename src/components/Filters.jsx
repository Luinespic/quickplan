function Filters({ busqueda, setBusqueda, categoriaFiltro, setCategoriaFiltro }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar por título o lugar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: '5px', marginRight: '10px', width: '250px' }}
      />

      {/* Filtro por categoría */}
      <select
        value={categoriaFiltro}
        onChange={(e) => setCategoriaFiltro(e.target.value)}
        style={{ padding: '5px' }}
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
