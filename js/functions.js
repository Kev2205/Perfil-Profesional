//alert("FUNTIOCN ACTIVO")
//######## TIPO DE VARIABLES
// const para valores constantes
const pi = 1.1416;
const pul = 2.54; 
// var para variables globales
var days = 10;
var name = "Kevin Delgado";
// let para variables de bloque o locales
let count = 1;

//######## formas de impresion
//alert
//alert(name);
//console.log
console.log(name);
//body - pantalla
document.write(name + "###Kevin Delgado")
document.getElementById("box_one").innerHTML = "<h1>Kevin Delgado<h1>";
document.getElementById("box_two").innerText = "<h1>Kevin Delgado<h1>";
// librerias
//Swal.fire(
//    'you are sapo hpta?',
//    'or gonorrea?',
//    'question'
//  )
//Swal.fire({
//    icon: 'error', 
//   showConfirmButton: false,
//    title: name,
//    text: name,
//    footer: "footer: " + name,
//    background: 'green',
//    position: 'top-start'
//});

//######## tipos de datos
//numericos

var number_one = 20;
var number_two = 5.5;
//texto
var class_type = "Electiva Tecnica 1";
//booleanos
var boolean = true; //flase
//arrays - vectores
var array_num = [1, 2, 3, 45, 3.4, 1.2];
var array_tex = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var array_mix = [1, "a", 2, "c"];
var_mul =[
    
]

//######## Operadores basicos
//suma
var suma = number_one + number_two;
console.log("suma =" + suma)
//resta
var resta = number_one - number_two;
console.log("resta =" + resta)
//multiplicacion
var multi = number_one * number_two;
console.log("multiplicacion =" + multi)
//division
var divi = number_one / number_two;
console.log("divicion =" + divi.toFixed(2))
//modulo
var modulo = number_one % number_two;
console.log("Modulo = " + modulo)