//1.What is the object type?  
/*The object type refers to a compound value where you can set properties (named locations) that each hold their own values of any type. Eg.*/

const object ={
    a:'hello',
    b: 24,
    c: true
}
console.log(object.a);
console.log(object["b"]);
console.log(object['c']);


module.exports=object;