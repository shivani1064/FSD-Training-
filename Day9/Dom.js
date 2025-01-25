onsole.log(typeof document); //object
console.log(window);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.title);
document.title = "flipkart"
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[1]);
console.log(document.links[2]);
document.links[0].href = "http://www.youtube.com"
document.links[1].href = "http://www.flipkart.com"

//methods
//in-direct access in dom

// documnet.getElementById("value")
// documnet.getElementByClassName("value")
// documnet.getElementById("value")
// documnet.getElementByName("value")
// documnet.querySelector("value")
// documnet.querySelectorAll("value")

let a = document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent = "batch 4"
a.style.backgroundColor = "red"
a.style.textAlign = "center"

let b = document. getElementsByClassName ("demo1")
console. log (b); console. log(b[0]); console. log (b[1]);
console. log(b[0]. textContent);
b[0]. style.backgroundColor = "green"

let c = document.getElementsByTagName("p")
console.log(c);
console.log(c[1]);
console.log(c[1].textContent);
c[1].textContent = "hello"
c[1].style.border = "Spx solid red"

document.getElementsByName("demo2")

//document.querySelector
// -->we have to pass value with css-symbol
// -->will reurns reference of an first-element

let e = decodeURIComponent.querySelector("#demo")
console.log(e);

let e1 = decodeURIComponent.querySelector(".demo")
console.log(e1);

