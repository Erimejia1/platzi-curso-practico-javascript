// console.log('Hello, world');


// h1 { color: red }
// .parrafito { ... }
// #pid { ... }


//const head1 = document.getComputedStyle('h1');
const head1 = document.getElementsByTagName('h1');
const h1 = document.querySelector('h1'); //aqui es obtenida a traves del nombre de la etiqueta
//const h1class = document.querySelector('.clase_H1'); //aqui es obtenida a traves de la class  
const h11 = window.getComputedStyle(h1); //obtendra todos los 'style' de un elemento, unicamente si hace referencia a un elemento obtenido por un 'querySelector' 
//const h11 = window.getComputedStyle(h1class); //obtendra todos los 'style' de un elemento, unicamente si hace referencia a un elemento obtenido por un 'querySelector'
const p = document.querySelector('p');
const pList = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('parrafito');//en el metodo "getElementsByClassName" su parametro no necesita el prefijo de punto como en CSS
const pid = document.getElementById('pid');//en el metodo "getElementById" su parametro no necesita el prefijo de # como en CSS
const input = document.querySelector('input');


input.value = 'adios !!';

console.log(input.value);

console.log({
    h1,
    head1,
    //h1class,
    h11,
    p,
    pList,
    parrafito,
    pid,
    input,
});

//head1.innerHTML = 'Patito <br> Feo'; //No podra insertar texto cuando la referencia al elemento viene de un 'getElement...'
h1.innerHTML = 'Patito <br> Feo'; //Sí podra insertar texto cuando la referencia al elemento viene de un 'querySelector...'
//h1.innerText = 'Patito <br> Feo';
console.log(h1.getAttribute('class'));
console.log(h1.getAttribute('style'));

h1.setAttribute('style', 'color:blue;font-size:80px');

h1.classList.add('rojo');
p.classList.add('classParr');
// h1.classList.add('rojo', 'verde');
// h1.classList.remove('clase_H1');
// h1.classList.remove('rojo');
// // h1.classList.toggle('verde');
// // h1.classList.contains('verde');

// input.value = "456"

//pid.innerText = "";// aqui eliminamos el contenido del texto dentro del parrafo

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);
pid.appendChild(img);



