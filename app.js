//Iteracion #1: Fetch
/*1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un js.*/ 
/*fetch("https://api.agify.io?name=michael")
.then((res) => res.json())
.then((res) => console.log(res))*/

/*1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/
//baseUrl = 'https://api.nationalize.io';
/*const baseUrl = 'https://api.nationalize.io'
const myButton = document.querySelector("button");
const myInput = document.querySelector("input");
const myFunction = async (name) => {
    const data = await fetch(`https://api.nationalize.io?name=${name}`)
    const dataJson = await data.json();
    console.log(dataJson);
}
myButton.addEventListener("click", (event) => {
    myFunction(myInput.value);
})

/*1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.*/

/*const myFunction2 = async (name) => {
    const data = await fetch(`https://api.nationalize.io?name=${name}`)
    const dataJson = await data.json();
    for (const country of dataJson.country) {
        const container = document.querySelector("#container")
        container.innerHTML += `
        <p>El nombre ${myInput.value} tiene un ${country.probability*100} % de ser de ${country.country_id}.</p>
        `;
    }
}
myButton.addEventListener("click", (ev) => {
    myFunction(myInput.value);
    
})

/*1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.*/
/*constprontInfo = (countries, name ) => {
    for(const country in countries){
        const div = document.createElement("button");
    }


/*2.1 Gestiona la siguiente promesa para esperar a ejecutar el console usando 
async-await.*/
const runTimeOut = async () => {
    await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
    console.log("Hola")
};

runTimeOut();

/*2.2 Convierte la siguiente función con un fetch utilizando async-await. 
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;*/
const getCharacters = async() => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await res.json();
    console.log(characters);
};

getCharacters();
