export const getGenders = (genders) => {
  if (!genders.hombre && !genders.mujer) {
    return ['Hombre', 'Mujer'];
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
