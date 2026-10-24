/*
============================================================
    CLASE 3 — FUNCIONES
    CoderHouse JavaScript | Profesor: Furlong Marcelo
============================================================

📝 REPASO CLASE ANTERIOR:
- ¿Cómo comparamos valores de forma segura? → === (igualdad estricta)
- ¿Cómo tomamos decisiones en el código? → if / else if / else / switch
- ¿Cuándo usamos for? → cuando sabemos cuántas veces repetir
- ¿Cuándo usamos while? → cuando repetimos hasta que algo cambie
- ¿Qué hace break? → termina el ciclo antes de que acabe solo

🎯 HOY VAMOS A APRENDER:
✅ Qué son las funciones y por qué cambiarón todo
✅ Función declarada vs expresión de función
✅ Parámetros, argumentos y cómo devolver resultados (return)
✅ Funciones flecha — la forma moderna y compacta
✅ Scope — dónde "viven" las variables

============================================================
*/


// ============================================================
// 🧠 PARTE 1: ¿QUÉ ES UNA FUNCIÓN Y POR QUÉ USARLA?
// ============================================================

/*
💡 ANALOGÍA:
Pensemos en una cafetera. La comprás una vez, la enchufás cuando querés,
y te hace café todas las veces que quieras.

No tenés que armar la cafetera de cero cada mañana.
Eso son las funciones — las escribís UNA VEZ y las usás cuantas veces necesités.

Sin funciones → copiás y pegás el mismo código en 10 lugares
Con funciones → lo escribís una vez y lo llamás 10 veces

Ventajas:
✅ Reutilizar código — escribís una vez, usás mil
✅ Organizar — el código se divide en piezas con nombre
✅ Abstraer — podés usar calcularImpuesto() sin recordar cómo lo calcula
*/

// Sin funciones (código repetido — MAL):
// console.log("Bienvenido Ana al sistema")
// console.log("Bienvenido Pedro al sistema")
// console.log("Bienvenido Carla al sistema")

// Con funciones (lo escribimos una vez — BIEN):
function saludar(nombre) {
    console.log("Bienvenido " + nombre + " al sistema")
}

saludar("Ana")    // Bienvenido Ana al sistema
saludar("Pedro")  // Bienvenido Pedro al sistema
saludar("Carla")  // Bienvenido Carla al sistema


// ============================================================
// 📦 PARTE 2: FUNCIÓN DECLARADA — La forma clásica
// ============================================================

/*
Es la forma más tradicional de crear una función.
Se escribe con la palabra reservada function seguida de un nombre.

ESTRUCTURA:
function nombreDeLaFuncion(parametro1, parametro2) {
    // código que se ejecuta cuando llamamos la función
}

⚡ HOISTING:
Las funciones declaradas tienen una ventaja especial — JavaScript las "levanta"
al principio del archivo automáticamente. Podés llamarlas ANTES de declararlas.
(Aunque no es una buena práctica, es útil saberlo.)
*/

// Función sin parámetros
function mostrarFecha() {
    let hoy = new Date()
    console.log("Fecha actual:", hoy.toLocaleDateString())
}

mostrarFecha()  // Fecha actual: 17/10/2026

// Función con parámetros
function sumar(a, b) {
    console.log(a + " + " + b + " = " + (a + b))
}

sumar(5, 3)   // 5 + 3 = 8
sumar(10, 20) // 10 + 20 = 30

// Demostración de hoisting — funciona aunque la llamamos antes de declararla
despedirse("Marcos")

function despedirse(nombre) {
    console.log("Hasta luego, " + nombre + "!")
}
// Hasta luego, Marcos!


// ============================================================
// 🔄 PARTE 3: EXPRESIÓN DE FUNCIÓN — Funciones como valores
// ============================================================

/*
💡 ANALOGÍA:
Imaginen que guardan una receta en una caja con nombre.
La caja es la variable, la receta es la función.

En JavaScript las funciones son ciudadanos de primera clase —
se pueden guardar en variables, pasar como argumentos, retornar desde otras funciones.

DIFERENCIA CLAVE con función declarada:
- Función declarada → tiene hoisting (se "levanta")
- Expresión de función → NO tiene hoisting, se usa después de declararla

Usamos const porque no vamos a reasignar la función.
*/

const calcularDescuento = function(precio, porcentaje) {
    let descuento = precio * (porcentaje / 100)
    console.log(`Precio original: $${precio}`)
    console.log(`Descuento (${porcentaje}%): $${descuento}`)
    console.log(`Precio final: $${precio - descuento}`)
}

calcularDescuento(1000, 20)
// Precio original: $1000
// Descuento (20%): $200
// Precio final: $800

calcularDescuento(500, 10)
// Precio original: $500
// Descuento (10%): $50
// Precio final: $450

/*
⚠️ Error común — llamar antes de declarar:
calcularDescuento(200, 5)  ← ERROR si esta línea está ANTES de la declaración
const calcularDescuento = function() { ... }
*/


// ============================================================
// ↩️ PARTE 4: PARÁMETROS, ARGUMENTOS Y RETURN
// ============================================================

/*
💡 ANALOGÍA:
Pensemos en una calculadora:
- Los PARÁMETROS son las ranuras donde ponés los números (a y b en la pantalla)
- Los ARGUMENTOS son los números reales que ingresás (5 y 3)
- El RETURN es el resultado que aparece en la pantalla

Parámetros → los "huecos" que la función espera recibir (en la declaración)
Argumentos → los valores reales que le pasamos (cuando la llamamos)
Return → el resultado que la función devuelve hacia afuera

⭐ REGLA DE ORO DEL RETURN:
En cuanto JavaScript encuentra un return, la función SE DETIENE.
Nada del código que esté después del return se ejecuta.
*/

// Sin return — hace cosas pero no devuelve nada
function mostrarSuma(a, b) {
    console.log("La suma es: " + (a + b))
    // esta función devuelve undefined implícitamente
}

mostrarSuma(4, 6)  // La suma es: 10

// Con return — devuelve el resultado para usarlo afuera
function calcularSuma(a, b) {
    return a + b
    // nada después de return se ejecuta
}

let resultado = calcularSuma(4, 6)
console.log("Resultado guardado:", resultado)  // 10
console.log("El doble del resultado:", resultado * 2)  // 20

// Ejemplo real: validar si un usuario es mayor de edad
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true
    } else {
        return false
    }
}

let edadUsuario = 20
if (esMayorDeEdad(edadUsuario)) {
    console.log("Puede entrar ✅")
} else {
    console.log("No puede entrar ❌")
}

// Ejemplo real: calcular el total de una compra
function calcularTotal(precio, cantidad, descuento) {
    let subtotal = precio * cantidad
    let montoDescuento = subtotal * (descuento / 100)
    return subtotal - montoDescuento
}

let totalCompra = calcularTotal(100, 5, 15)
console.log("Total a pagar: $" + totalCompra)  // Total a pagar: $425

/*
🎯 Ejercicio en vivo:
Crear una función que reciba nombre y año de nacimiento,
calcule la edad y devuelva un saludo personalizado con la edad.
*/

function generarSaludo(nombre, anioNacimiento) {
    let edadActual = 2026 - anioNacimiento
    return `Hola ${nombre}, tenés ${edadActual} años!`
}

console.log(generarSaludo("Ana", 2000))    // Hola Ana, tenés 26 años!
console.log(generarSaludo("Carlos", 1990)) // Hola Carlos, tenés 36 años!


// ============================================================
// ⚡ PARTE 5: FUNCIONES FLECHA — La forma moderna
// ============================================================

/*
💡 ANALOGÍA:
La función flecha es como escribir un mensaje de texto en lugar de una carta formal.
Misma información, menos palabras.

Llegaron con ES6 (2015) y hoy en día son las más usadas.

EVOLUCIÓN de una misma función:

1️⃣ Función declarada:
function sumar(a, b) {
    return a + b
}

2️⃣ Expresión de función:
const sumar = function(a, b) {
    return a + b
}

3️⃣ Función flecha:
const sumar = (a, b) => a + b

Son equivalentes — hacen exactamente lo mismo.

REGLAS de la función flecha:
- Si tiene UN solo parámetro → podés omitir los paréntesis
- Si el cuerpo es UNA sola expresión → podés omitir las llaves y el return (return implícito)
- Si tiene CERO o MÁS de un parámetro → los paréntesis son obligatorios
*/

// Forma completa (con llaves)
const multiplicar = (a, b) => {
    return a * b
}
console.log("Multiplicar:", multiplicar(4, 5))  // 20

// Forma corta — una sola expresión, return implícito
const dividir = (a, b) => a / b
console.log("Dividir:", dividir(10, 2))  // 5

// Un solo parámetro — sin paréntesis
const elevarAlCuadrado = n => n * n
console.log("Cuadrado de 6:", elevarAlCuadrado(6))  // 36

// Sin parámetros — paréntesis vacíos obligatorios
const obtenerAnio = () => 2026
console.log("Año actual:", obtenerAnio())  // 2026

// Ejemplo real con lógica interna (necesita llaves)
const clasificarEdad = edad => {
    if (edad < 13) return "niño"
    if (edad < 18) return "adolescente"
    if (edad < 65) return "adulto"
    return "adulto mayor"
}

console.log(clasificarEdad(8))   // niño
console.log(clasificarEdad(15))  // adolescente
console.log(clasificarEdad(30))  // adulto
console.log(clasificarEdad(70))  // adulto mayor


// ============================================================
// 🏠 PARTE 6: SCOPE — Dónde viven las variables
// ============================================================

/*
💡 ANALOGÍA:
Imaginá un edificio.
- El HALL de entrada (scope global) → todos pueden acceder
- Los DEPARTAMENTOS (scope local) → solo quienes viven ahí pueden acceder

Las variables tienen "hogares". Desde adentro podés ver hacia afuera,
pero desde afuera no podés ver hacia adentro.

Tipos de scope:
🌍 Global → declarada fuera de todo, visible en todo el archivo
🏠 Local/Función → declarada dentro de una función, solo existe ahí
📦 Bloque → declarada dentro de {} (if, for, while), solo existe ahí
*/

// SCOPE GLOBAL — visible en todo el archivo
const nombreApp = "Sistema CoderHouse"
let usuariosConectados = 0

function conectarUsuario(nombre) {
    usuariosConectados++  // puede acceder a la variable global
    console.log(`${nombre} conectado. Total: ${usuariosConectados}`)
}

conectarUsuario("Ana")    // Ana conectado. Total: 1
conectarUsuario("Pedro")  // Pedro conectado. Total: 2

// SCOPE LOCAL — la variable solo existe dentro de la función
function calcularImpuesto(monto) {
    let tasa = 0.21  // variable LOCAL — solo existe acá adentro
    return monto * tasa
}

console.log("Impuesto:", calcularImpuesto(100))  // Impuesto: 21
// console.log(tasa)  ← ERROR: tasa is not defined (no existe afuera)

// SCOPE DE BLOQUE — let y const dentro de {}
let temperatura = 35

if (temperatura > 30) {
    let mensaje = "hace calor!"  // solo existe dentro de este if
    console.log(mensaje)  // hace calor!
}
// console.log(mensaje)  ← ERROR: mensaje is not defined

// SHADOWING — variable local "tapa" a la global
const color = "azul"  // global

function cambiarColor() {
    const color = "rojo"  // local — NO modifica la global, la "sombrea"
    console.log("Adentro:", color)  // rojo
}

cambiarColor()
console.log("Afuera:", color)  // azul — la global no cambió

/*
✅ BUENA PRÁCTICA:
- Usar el scope más pequeño posible para cada variable
- Evitar variables globales que no son necesarias
- Si una variable solo se usa dentro de una función → declararla adentro
*/


// ============================================================
// 🎯 EJERCICIO INTEGRADOR
// ============================================================

/*
Sistema de registro de alumnos con funciones:
- Función para pedir datos al usuario
- Función para calcular el promedio
- Función flecha para generar el mensaje final
- Todo usando scope correctamente
*/

function pedirDatos() {
    let nombre = prompt("¿Cuál es tu nombre?")
    let nota1 = Number(prompt("Nota del primer parcial (0-10):"))
    let nota2 = Number(prompt("Nota del segundo parcial (0-10):"))
    return { nombre, nota1, nota2 }
}

function calcularPromedio(nota1, nota2) {
    return (nota1 + nota2) / 2
}

const generarInforme = (nombre, promedio) => {
    let estado = promedio >= 6 ? "APROBADO ✅" : "DESAPROBADO ❌"
    return `Alumno: ${nombre} | Promedio: ${promedio} | Estado: ${estado}`
}

// Llamamos a las funciones en orden
let datos = pedirDatos()
let promedio = calcularPromedio(datos.nota1, datos.nota2)
let informe = generarInforme(datos.nombre, promedio)

console.log(informe)
alert(informe)
