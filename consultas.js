/* 
  Ejercitación: Consultas Raw en MongoDB
*/

// 1. Búsqueda exacta: equipos del continente "Europa"
const buscarEuropa = {
  continente: 'Europa',
};

// 2. Búsqueda parcial ($in): equipos del grupo "C" o "F"
const buscarGruposCOF = {
  grupo: { $in: ['C', 'F'] },
};

// 3. Búsqueda parcial ($regex): técnico que contenga "Lionel"
const buscarTecnicoLionel = {
  tecnico: { $regex: 'Lionel', $options: 'i' },
};

// 4. Búsqueda con $gt: más de 1 campeonato mundial
const buscarMasDeUnMundial = {
  campeonatos_mundiales: { $gt: 1 },
};

// 5. Búsqueda en subdocumentos ($gte): goles_a_favor >= 15
const buscarGolesAFavor = {
  'rendimiento.goles_a_favor': { $gte: 15 },
};

// 6. Búsqueda en arrays: jugadores del Paris Saint-Germain
const buscarJugadoresPSG = {
  'jugadores.club_actual': 'Paris Saint-Germain',
};

// 7. Operadores lógicos ($or): grupo "F" O continente "Sudamérica"
const buscarGrupoFOAmerica = {
  $or: [{ grupo: 'F' }, { continente: 'Sudamérica' }],
};

// 8. Búsqueda exacta: equipos del grupo "J"
const buscarGrupoJ = {
  grupo: 'J',
};

// 9. Ordenamiento: por rendimiento.ganados descendente
const ordenarPorGanados = {
  'rendimiento.ganados': -1,
};

// 10. Modificación ($set): cambiar técnico a "Lionel Scaloni (Campeón)"
const actualizarTecnicoCampeon = {
  $set: { tecnico: 'Lionel Scaloni (Campeón)' },
};

module.exports = {
  buscarEuropa,
  buscarGruposCOF,
  buscarTecnicoLionel,
  buscarMasDeUnMundial,
  buscarGolesAFavor,
  buscarJugadoresPSG,
  buscarGrupoFOAmerica,
  buscarGrupoJ,
  ordenarPorGanados,
  actualizarTecnicoCampeon,
};