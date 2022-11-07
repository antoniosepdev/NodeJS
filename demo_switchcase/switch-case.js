const expr = ("Plátano");
switch (expr) {
  case 'Naranja':
    console.log('Una naranja vale $2.');
    break;
  case 'Mango':
    console.log('Mango vale $4.');
  case 'Papayas':
    console.log('Papaya vale $3.');
  case 'Manzana':
    console.log('Manzana vale $1.');
    break;
  default:
    console.log(`Lo sentimos, no hay existencia de ${expr}.`);
}
