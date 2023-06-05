 FInalOrdinaria2022
Se pide realizar una aplicación web que muestre los personajes de Rick y Morty y que incluya la siguiente
funcionalidad (se puede elegir usar API Rest o GraphQL)
● Paginación (2 puntos)
  ○ 20 personajes por página, en 5 filas de 4 personajes.
  ○ El menú de navegación debe mostrar en qué página te encuentras, la posiblidad de avanzar
  y retroceder (solo cuando sea posible) y el número total de páginas.
  Por ejemplo: << 4/20 >> indicaría que que estás en la página 4 de 20, y mostraría los
  enlaces para avanzar y retroceder. Si estoy en la primera página sería 1/20 >>, y en la
  última << 20/20
● Ordenación (2 puntos). Dentro de una página se debe poder ordenar los personajes por orden
  alfabético de nombre.
● Filtrado (4 puntos). Debe ser posible filtrar por estos criterios:
  ○ Status.
  ○ Género.
    Pueden estar activos ambos filtros (por ejemplo, masculino y muerto), sólo uno, o ninguno
    (no se aplica ningún filtro).
    Los resultados filtrados deben igualmente ser paginados, con las mismas características.
● Búsqueda por nombre (2 puntos). Al igual que el resto de apartados, los resultados deben estar
paginados.

Se hace notar que debe ser posible buscar por nombre y filtrar simultáneamente, por ejemplo,
buscar los personajes cuyo nombre contenta “Ri” y estén “vivos”.

Para cada personaje se debe mostrar:
● Fotografía
● Nombre
● Status
● Género
● Origen

Criterios de Evaluación
Se restará 1 punto si en github hay archivos innecesarios, como por ejemplo node_modules o
cualquier otro archivo no requerido (package.lock.json es requerido)
Se recomienda ir avanzando apartado a apartado y garantizando su funcionalidad, y no aspirar a hacer
todo desde el principio.
Cada apartado recibirá puntuación si y sólo si funciona cómo se pide (si no funciona como se pide la
puntuación será de 0 puntos para el apartado). En el caso de que funcione correctamente se evaluará la
calidad del código, tipado, uso correcto de los hooks, etc.
Sólo se evaluará el examen si haciendo npm install && npm start se ejecuta correctamente, sin necesidad
de hacer ningún tipo de configuración manual por parte del profesor.
