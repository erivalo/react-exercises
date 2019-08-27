let people = ["Steve", "Pete", "Mike", "Nick"];
let people2 = ["Marcos", ...people];
console.log("people2 => ", people2);

let user = { name: "steve", age: 22 };
let details = { place: "Romania", hobby: "reading" };
let userDetails = { ...user, ...details };
console.log("userDetails=> ", userDetails);

let user2 = { name: "pedro", lastname: "poveda", details: { phone: 4553120, dir: "direction 123" } };
let { phone, dir } = user2.details;
console.log(`My phone is ${phone} and my dir is ${dir}`);


//iventiva2019@gmail.com