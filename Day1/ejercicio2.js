const users = [
    { id: 11, nombre: "Adam", edad: 23, grupo: "editor" },
    { id: 47, nombre: "John", edad: 28, grupo: "admin" },
    { id: 85, nombre: "William", edad: 34, grupo: "editor" },
    { id: 97, nombre: "Oliver", edad: 28, grupo: "admin" },
];

const filteredValues = users.filter(o => o.nombre.includes("ohn"));
console.log("ohn", filteredValues);

const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((valorAnterior, valorActual) => valorAnterior + valorActual);
const prom = sum/euros.length;

console.log(`sum: ${sum} prom: ${prom}`);
