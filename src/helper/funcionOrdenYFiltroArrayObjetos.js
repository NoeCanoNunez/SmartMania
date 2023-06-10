export const filterByEquipo = (array, parametro) => {
    const upperCaseParametro = parametro.toUpperCase();
    const filteredArray = array.filter(item => {
      const upperCaseEquipo = item.Equipo.toUpperCase();
      return upperCaseEquipo.indexOf(upperCaseParametro) !== -1;
    });
  
    return filteredArray;
  }
// modo de orden: ascendente, descendente
export const orderPor = (objetos, propiedades, modosOrden) => {
  return [...objetos].sort((a, b) => propiedades.reduce((acumulador, p, i) => {
      if (acumulador === 0) {
          let [m, n] = modosOrden && modosOrden[i] === 'DESCENDENTE' ? [b[p], a[p]] : [a[p], b[p]];

          acumulador = m > n ? 1 : m < n ? - 1 : 0;
      }

      return acumulador;
  }, 0))
}
