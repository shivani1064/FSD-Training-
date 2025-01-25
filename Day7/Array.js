let arr = new Array(10,20,"hello")
console.log(arr);

let obj = {
    name : "rahul",
    id : 1,
    designation : "manager",

}
console.log(obj);

obj.demo()
console.log(obj.arr);


function obj1(name, id)
{
  this.name = name;
  this.id = id;
}
let p1 = new obj1("kumar")
console.log(p1);
