import data from "./data.js"

// Retrieves template data from html
const source = document.getElementById("card-item-template").innerHTML;

// Compiles template data into a function
const template = Handlebars.compile(source);

const context = data

const html = template(context);

document.querySelector("cards").insertAdjacentHTML("afterbegin", html)

console.log("Hello World")

function generateHTML(data){
    

}