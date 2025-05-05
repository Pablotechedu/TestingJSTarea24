/*Paso 1:

Utilice la asignación desestructurada para crear una
variable const llamada functionality, que extraiga la
propiedad functionality de robot.*/

// const robot = {
//   model: "1E78V2",
//   energyLevel: 100,
//   functionality: {
//     beep() {
//       console.log("Beep Boop");
//     },
//     fireLaser() {
//       console.log("Pew Pew");
//     },
//   },
// };

/*Paso 2 
Dado que functionality se hace referencia a
robot.functionality podemos llamar a los métodos 
disponibles en robot.functionality simplemente a través de 
functionality.

Aproveche este atajo y llame al método .beep() en 
functionality.*/

//Paso 1
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};
// Paso 2
const { functionality } = robot;

functionality.beep();
functionality.fireLaser();
