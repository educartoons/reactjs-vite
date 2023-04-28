// this returns true or false if the string of colors passes the validation

const colorsSet = new Set([
  'rojo',
  'azul',
  'amarillo',
  'verde',
  'rosado',
  'marron',
  'blanco',
  'morado',
]);

function isAValidArrayColors(colors) {
  const arrayColors = colors.split(',');
  for (const color of arrayColors) {
    if (!colorsSet.has(color.trim().toLowerCase())) return false;
  }
  return true;
}

export { isAValidArrayColors };
