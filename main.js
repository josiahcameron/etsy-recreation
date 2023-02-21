import data from "./data.js"


(function(){
    "use strict";

    const source = document.getElementsByClassName("etsy-card-template")[0].innerHTML;
    const template = Handlebars.compile(source);

    const context = data
    const html = template(context);

    document.getElementsByClassName("etsy-list")[0].insertAdjacentHTML("afterbegin", html)
})();


// // Retrieves template data from html
// const source = document.getElementById("card-item-template").innerHTML;

// // Compiles template data into a function
// const template = Handlebars.compile(source);



// const html = template(context);

// document.querySelector("cards").insertAdjacentHTML("afterbegin", html)

// console.log("Hello World")



