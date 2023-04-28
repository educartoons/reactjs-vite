export const getGenders = (genders) => {
  console.log('getting genders');
  if (!genders.hombre && !genders.mujer) {
    return ['Mujer', 'Hombre'];
  }
  const checkedGenders = [];
  if (genders.hombre) {
    checkedGenders.push('Hombre');
  }
  if (genders.mujer) {
    checkedGenders.push('Mujer');
  }
  return checkedGenders;
};

// colors = {name: value<Boolean>}

export const getColors = (colors) => {
  const newColors = [];

  for (const name in colors) {
    if (colors[name]) {
      newColors.push(name.toLowerCase(name));
    }
  }

  console.log(newColors);

  if (newColors.length === 0) {
    return [
      'naranja',
      'amarillo',
      'morado',
      'azul',
      'rojo',
      'verde',
      'rosado',
      'gris',
      'marron',
      'negro',
    ];
  }

  return newColors;
};
