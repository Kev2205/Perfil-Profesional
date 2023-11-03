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

// OPERADORES LOGICOS (INVERSE, INCREMENTO Y DECREMENTO)
// AND && con if - ampersand
var bool = false;
var numeric = 10;
if (!bool && numeric === "10"){ //bool== true
    console.log ("ENTRA IF");
}
else{
    console.log("ENTRA ELSE")
}

//OR || CON IF

if (!bool || numeric === 7){ 
    console.log ("ENTRA IF");
    numeric+=3;
}
else{
    console.log("ENTRA ELSE");
    numeric--;
}

//FOR
console.log ("longitud del vector: " + array_tex.length)
for (let j = 0; j<array_tex.length; j++ ){
    console.log(array_tex [j] + " " + (j+1))
}

//WHILE
let f=0;
while (f<array_tex.length){
    console.log(array_tex[f] + (f+1));
    f++;
}

//DO WHILE
let m = 0;
do{
    console.log(array_tex[m] + (m+1));
    m++;
}
while(m<array_tex.length);

// FUNCIONES Y EVENTOS
function load_page(){
        alert("La pagina se ha cargado con exito :D")
}

function change_color(){
    document.body.style.backgroundColor = "green"
    document.body.style.color = "#fff"
}

const btn_limpiar = document.querySelector("#clear_color");

clear_color.addEventListener("click", () => {
    document.body.style.backgroundColor = "#fff"
    document.body.style.color = "pink"
} );

// REGISTRO FORMULARIO
const form_register = document.getElementById("form_register")
const nombres = document.getElementById("nombres")
const apellidos = document.getElementById("apellidos")
const information = document.getElementById("information")

form_register.addEventListener("submit", name_event => {
    name_event.preventDefault();
    let info = "";
    console.log(nombres.value);
    if(nombres.value.length <= 2 || apellidos.value.length <= 2){
        alert("NOMBRES Y/O APELLIDOS INVALIDOS")
    }
    else{
        alert(nombres.value + " " + apellidos.value )
    }
    information.innerText = info;
})