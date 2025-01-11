console.log("Start");

//global scope

var a = 10;
console.log(a);

//local-scope

let b = 20;
console.log(b);

const c = 30;
console.log(c);


//block-scope

{
    var m = "hello"
    console.log(m)

    let m = 300
    console.log(m)

    const o = 200
    console.log(0)

}

console.log("Stop")

