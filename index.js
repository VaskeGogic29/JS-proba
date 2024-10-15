// console.log('Hello');
// console.log('Zdarvooo');

// window.alert('Volim da hasam picuuu');

// document.getElementById("naslov").textContent="BroCode";
// document.getElementById("tekst").textContent="Volim da hasam picuuu";


// let age=24;

// console.log(`Ja imam ${age} godina`);

// a=72;

// console.log(a)
// console.log(typeof(a))

// const PI=3.14;

// document.getElementById("submit").onclick=function(){
//     let radius=document.getElementById("pp").value;

//     radius=Number(radius);

//     let obim=2*radius*PI;

//     document.getElementById("mojh3").textContent=obim + 'cm';
// }


const povecaj = document.getElementById("povecaj");
const smanji = document.getElementById("smanji");
const reset = document.getElementById("reset");
const brojac = document.getElementById("brojac");

let count = 0;

povecaj.onclick = function(){
    count++;
    brojac.textContent = count;
}

smanji.onclick = function(){
    count--;
    brojac.textContent = count;
}

reset.onclick = function(){
    count=0;
    brojac.textContent = count;
}

const kockica=document.getElementById("kockica");
const prikaz=document.getElementById("kockicaprikaz");
let min=1;
let max=6;
let a;

kockica.onclick=function(){
    a= Math.floor(Math.random()*max) + min;

    prikaz.textContent=a;
}



function pomnozi(x,y){
    return x*y;
}

pomnozi(3,4);

console.log(pomnozi(3,4));


hello(goodbye);
goodbye();

function hello(zdravo){
    console.log("Hello!");
    zdravo();
}

function goodbye(){
    console.log("Goodbye!");
}


let numbers = [1,2,3,4,5,6,7];

numbers.forEach(display);

function display(broj){
    console.log(broj);
}

function dupliraj(broj, indeks, niz){
    niz[indeks]=2*broj;
}

numbers.forEach(dupliraj);
numbers.forEach(display);


let p=function(){
    console.log("NAPRED PARTIZAN")
}

p();

let par=()=>console.log("NAPRED PARTIZAN")

par();