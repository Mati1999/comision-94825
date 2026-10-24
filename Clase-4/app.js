// Arrays

let edades = [1, 50, 23, 68, 24]; // Array de numbers
let nombres = ["Brian", "Jimena", "Agustin", "Maria"]; // Array de Strings
// let booleans = [true, false, false, true, false]; // Array de Booleanos
// let mix = [true, 65, "Mati", false, "Jeje"]; // Array mixto
// let nada = []; // Array vacío

// console.log("Original: ", edades);

// console.log(edades.length);
// console.log(edades.indexOf(33));

// edades[2] = 22;
// console.log(edades[2]);

// for (let i = 0; i < edades.length; i++) {
//   const element = edades[i];
//   console.log(element);
// }

//push
// edades.push(89);
// console.log(edades);

//unshift
// edades.unshift(32);
// console.log(edades);

//pop y shift
// edades.pop();
// edades.shift();
// console.log(edades);

//join
// console.log("nombres: ", nombres);
// console.log(nombres.join(", "));
// console.log(edades.join(" --- "));

//includes
// console.log(edades.includes(81));

//sort
// console.log(edades.sort());
// console.log(nombres.sort());

//reverse
// console.log(edades.reverse());

// sort y reverse
// console.log(edades.sort().reverse());

//Objetos literales
let persona = {
  nombre: "Maria",
  edad: 51,
  ciudad: "La Plata"
};

// persona.edad = 52;
// delete persona.edad;

// console.log(persona);

let comprar = true;
let carrito = [];

let productos = [
  { id: 1, nombre: "remera", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 3000 },
  { id: 3, nombre: "zapatillas", precio: 5000 }
];

while (comprar) {
  let eleccion = prompt(`Elije una opción para agregar al carrito:
        1) Remera
        2) Pantalon
        3) Zapatillas `);

  switch (eleccion) {
    case "1":
      carrito.push(productos[0]);
      console.log("Producto agregado!");
      break;
    case "2":
      carrito.push(productos[1]);
      console.log("Producto agregado!");
      break;
    case "3":
      carrito.push(productos[2]);
      console.log("Producto agregado!");
      break;
    default:
      alert("Le erraste a la tecla, no esiste ese produto");
      break;
  }

  comprar = confirm("Cabellero, quiere seguir comprando?");
  if (!comprar) {
    console.log(carrito);
  }
}
