const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];
function rand(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
// a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
// b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

//a
const button1 =document.querySelector('button');
let h2Tags = document.querySelectorAll('h2');
// console.log(button1)
// console.log(h2Tags)
button1.addEventListener('click', (e) => {
h2Tags[0].innerText=rand(1,6);
h2Tags[1].innerText=rand(1,6);
//b
if(h2Tags[0].innerText == h2Tags[1].innerText) {
    h2Tags[0].style.color = "red";
    h2Tags[1].style.color ="red";
}  
else{
    h2Tags[0].style.color = "black";
    h2Tags[1].style.color ="black";
}
})
// 2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
// a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)
// b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)
//a
let arr = [];
const button2 =document.querySelector('button:nth-of-type(2)');
let h3Tag = document.querySelector('h3');

button2.addEventListener('click', function(e) {
arr.push(rand(1,10))
//b
let suma = 0;
function count(element){
suma+=element
//    console.log(suma)
}
arr.forEach(count)
h3Tag.innerText = `Visu skaiciu suma: ${suma}`
})
console.log(arr)
// console.log(arr)console.log(arr)


// 3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą africa. (4 taškai)
// b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
// c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)
//a
for(let i=0;i<africa.length;i++) {
console.log(africa[i]);
}
//b

const ulTag = document.querySelector('ul')

console.log(ulTag)

for(let i=0;i<africa.length;i++){
if(africa[i]!==""){
    let newLi = document.createElement('li');
    newLi.innerText = africa[i];
    ulTag.appendChild(newLi);
}
}


// 4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)
// a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
// b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
// Pasirinkite patys sau patogiausius metodus tai atlikti.

const suma = document.querySelector('h5');
let input1 = document.getElementById("first");
let input2 = document.getElementById("second");

const plusbtn = document.querySelector("#plius");
const minusbtn = document.querySelector("#minus");

plusbtn.addEventListener("click",(e)=>{
const x = parseFloat(input1.value);
const y = parseFloat(input2.value);
    let result = x + y
    suma.innerText = result
})

minusbtn.addEventListener("click",(e)=>{
const x = parseFloat(input1.value);
const y = parseFloat(input2.value);
    let result = x - y
    suma.innerText = result
})


// 5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
// b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
// c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)

//a
const ulTag2 = document.querySelector('ul:nth-of-type(2)')
australia.forEach(function(a) {
console.log(a);
})
let newString = ""

for(i=0; i<australia.length; i++) {
let newLi = document.createElement('li');
newLi.innerHTML =australia[i];
if(australia[i]=="Dingo") {
    newLi.style.backgroundColor = "blue"
}
ulTag2.append(newLi);

newString+=australia[i]
}
console.log(newString);
