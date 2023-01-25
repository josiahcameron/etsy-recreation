import { data } from "./data";

const source = document.getElementById("card-item-template").innerHTML;
const templateFunction = Handlebars.compile(source);
const html = template(context);

const title = data.results.title;

const image = data.filter(function (data) {
  return data.results.Image;
});
