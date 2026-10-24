/*
============================================================
    CLASE 2 — CONDICIONALES Y CICLOS
    CoderHouse JavaScript | Profesor: Furlong Marcelo
============================================================

📝 REPASO CLASE ANTERIOR:
- ¿Cómo declaramos variables que NO cambian? → const
- ¿Cómo declaramos variables que SÍ cambian? → let
- ¿Qué tipos de datos primitivos vimos? → number, string, boolean, undefined, null
- ¿Cómo pedimos datos al usuario? → prompt()
- ¿Cómo mostramos mensajes? → alert() y console.log()

🎯 HOY VAMOS A APRENDER:
✅ Cómo nuestro código toma decisiones automáticamente (condicionales)
✅ Cómo repetir código sin escribirlo mil veces (ciclos)

============================================================
*/

/*
💡 ANALOGÍA para condicionales:
¿Alguna vez usaron un cajero automático?
- El cajero pregunta tu PIN
- ✅ Si es correcto → te deja continuar
- ❌ Si es incorrecto → te dice "PIN inválido"
Eso son CONDICIONALES — el código toma decisiones.


*/


// ============================================================
// ⚖️ PARTE 1: OPERADORES DE COMPARACIÓN
// ============================================================

/*
Comparan dos valores y siempre devuelven true o false.

Imaginen que son jueces en un concurso y tienen que decidir:
- ¿Este puntaje es mayor que el otro?
- ¿Estos dos nombres son iguales?
- ¿Esta edad es suficiente para votar?
*/

let edad = 25
let precio = 100
let precioTexto = "100"

// Mayor y menor
console.log("25 > 18:", edad > 18)    // true
console.log("25 < 18:", edad < 18)    // false
console.log("25 >= 25:", edad >= 25)  // true
console.log("25 <= 24:", edad <= 24)  // false

// ⚠️ EL GRAN TEMA: == vs ===
console.log("100 === '100':", precio === precioTexto)  // false — distinto tipo
console.log("100 == '100':",  precio == precioTexto)   // true  — JS convierte ← PELIGROSO

/*
🚨 REGLA DE ORO:
SIEMPRE usar === y !== en lugar de == y !=

JavaScript con == hace conversiones raras que generan bugs difíciles de encontrar:
0 == false     → true  😱
"" == false    → true  😱
null == undefined → true  😱

Con === nada de eso pasa — compara valor Y tipo.
*/

console.log("100 !== '100':", precio !== precioTexto)  // true


// ============================================================
// 🎯 PARTE 2: CONDICIONALES IF / ELSE
// ============================================================

/*
Permiten que nuestro código tome decisiones automáticamente.

ESTRUCTURA BÁSICA:
if (condición) {
    // se ejecuta si la condición es TRUE
} else {
    // se ejecuta si la condición es FALSE
}
*/

// IF simple
let temperatura = 30

if (temperatura > 28) {
    console.log("hace calor, usar ropa ligera 🌞")
}

// IF / ELSE
let edadUsuario = 16

if (edadUsuario >= 18) {
    console.log("podés entrar al boliche ✅")
} else {
    console.log("no podés entrar, sos menor de edad ❌")
}

// IF / ELSE IF / ELSE — múltiples condiciones
let nota = 75

if (nota >= 90) {
    console.log("Excelente — A ⭐")
} else if (nota >= 80) {
    console.log("Muy bien — B 👍")
} else if (nota >= 70) {
    console.log("Bien — C ✅")
} else if (nota >= 60) {
    console.log("Suficiente — D 😐")
} else {
    console.log("Desaprobado — F ❌")
}

/*
🎯 Ejercicio en vivo:
Sistema de descuentos por cantidad comprada:
- más de 100 unidades → 20% descuento
- más de 50 unidades  → 15% descuento
- más de 20 unidades  → 10% descuento
- menos de 20         → sin descuento
*/

let cantidad = Number(prompt("¿Cuántas unidades comprás?"))
let precioUnitario = 100
let descuento = 0

if (cantidad > 100) {
    descuento = 0.20
} else if (cantidad > 50) {
    descuento = 0.15
} else if (cantidad > 20) {
    descuento = 0.10
} else {
    descuento = 0
}

let total = cantidad * precioUnitario
let totalConDescuento = total - (total * descuento)

console.log(`Cantidad: ${cantidad} unidades`)
console.log(`Descuento aplicado: ${descuento * 100}%`)
console.log(`Total a pagar: $${totalConDescuento}`)


// ============================================================
// 🔗 PARTE 3: OPERADORES LÓGICOS
// ============================================================

/*
Combinan varias condiciones en una sola.

&& → "Y además" — AMBAS deben ser true
|| → "O si no" — AL MENOS UNA debe ser true
!  → "No" — invierte el valor
*/

// && (AND) — para comprar necesito dinero Y que haya stock
let tieneDinero = true
let hayStock = true
let tiendaAbierta = false

let puedeComprar = tieneDinero && hayStock && tiendaAbierta
console.log("¿puede comprar?", puedeComprar)  // false — la tienda está cerrada

// || (OR) — puede pagar si tiene tarjeta O efectivo O cripto
let tieneTarjeta = false
let tieneEfectivo = true
let tieneCripto = false

let puedePagar = tieneTarjeta || tieneEfectivo || tieneCripto
console.log("¿puede pagar?", puedePagar)  // true — tiene efectivo

// ! (NOT) — invierte
let estaLloviendo = false
console.log("¿no llueve?", !estaLloviendo)  // true

/*
📊 TABLA DE VERDAD:
AND (&&): true && true = true | true && false = false | false && false = false
OR  (||): true || true = true | true || false = true  | false || false = false
NOT (!):  !true = false        | !false = true
*/

// Ejemplo combinando:
let edad2 = 20
let tieneEntrada = true

if (edad2 >= 18 && tieneEntrada) {
    console.log("puede entrar al evento ✅")
} else {
    console.log("no puede entrar ❌")
}


// ============================================================
// 🔁 PARTE 4: CICLO FOR
// ============================================================

/*
Usar cuando sabemos CUÁNTAS veces repetir.

for (inicio; condición; incremento) {
    // código que se repite
}

Desglose:
1. inicio      → se ejecuta UNA vez al principio
2. condición   → se verifica ANTES de cada repetición
3. incremento  → se ejecuta DESPUÉS de cada repetición
4. Si la condición es false → el ciclo termina
*/

// Básico: del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log("número:", i)
}

// Práctico: tabla de multiplicar
let numeroTabla = Number(prompt("¿De qué número querés ver la tabla?"))

for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabla} x ${i} = ${numeroTabla * i}`)
}

// Con break — para el ciclo antes de terminar
for (let i = 1; i <= 10; i++) {
    if (i === 5) break  // para cuando i llega a 5
    console.log("con break:", i)
}

// Con continue — saltea una vuelta
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue  // saltea los pares
    console.log("número impar:", i)
}


// ============================================================
// 🔄 PARTE 5: CICLO WHILE
// ============================================================

/*
Usar cuando repetimos HASTA QUE algo cambie.
No sabemos cuántas veces va a repetirse.

while (condición) {
    // código que se repite
    // ⚠️ IMPORTANTE: la condición debe cambiar eventualmente
}
*/

let vidas = 3

while (vidas > 0) {
    console.log(`Vidas restantes: ${vidas}`)
    vidas--
}
console.log("¡Game Over!")

// Ejemplo real: pedir contraseña hasta que sea correcta
let contrasenaCorrecta = "coder123"
let intentoUsuario = ""
let intentos = 0

while (intentoUsuario !== contrasenaCorrecta && intentos < 3) {
    intentoUsuario = prompt(`Ingresá la contraseña (intento ${intentos + 1}/3):`)
    intentos++
}

if (intentoUsuario === contrasenaCorrecta) {
    console.log("✅ ¡Acceso concedido!")
} else {
    console.log("❌ Demasiados intentos fallidos. Cuenta bloqueada.")
}


// ============================================================
// 🔀 PARTE 6: DO WHILE — ejecuta al menos UNA vez
// ============================================================

/*
Diferencia con while:
- WHILE: verifica la condición ANTES de ejecutar
- DO-WHILE: ejecuta PRIMERO, verifica DESPUÉS

Útil cuando siempre queremos que el código corra al menos una vez.
*/

let numero = 0

do {
    numero = Number(prompt("Ingresá un número positivo:"))
} while (numero <= 0)

console.log("Número válido:", numero)


// ============================================================
// 🎛️ PARTE 7: SWITCH — múltiples opciones
// ============================================================

/*
Cuando tenemos MUCHAS opciones específicas.
Más limpio que una cadena larga de if/else if.

Es como un menú de restaurante:
- Opción 1: Pizza
- Opción 2: Hamburguesa
- Default: "No tenemos eso"
*/

let n1 = Number(prompt("Número 1:"))
let n2 = Number(prompt("Número 2:"))
let operacion = prompt("Operación ( + - * / ):")
let resultado = 0

switch (operacion) {
    case "+":
        resultado = n1 + n2
        console.log(`${n1} + ${n2} = ${resultado}`)
        break
    case "-":
        resultado = n1 - n2
        console.log(`${n1} - ${n2} = ${resultado}`)
        break
    case "*":
        resultado = n1 * n2
        console.log(`${n1} × ${n2} = ${resultado}`)
        break
    case "/":
        if (n2 !== 0) {
            resultado = n1 / n2
            console.log(`${n1} / ${n2} = ${resultado}`)
        } else {
            console.log("⚠️ No se puede dividir por 0")
        }
        break
    default:
        console.log("Operación no válida. Usá: + - * /")
}