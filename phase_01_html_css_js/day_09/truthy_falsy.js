console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean("")); // false

console.log("5"*5);
let a=0;
let b='vivek';
let c='Rishi';
let z= a && b && c;
console.log(z); // 0

// Nullish coalescing operator (??)
// undefined and null are considered nullish values
let user;
console.log(user ?? "Guest"); // Guest

for(let i=0;i<5;i++){
    console.log("Hello World");
}
let obj = {
    name: "Vivek",
    age: 25,
    city: "New York"
}

for(let key in obj){
    console.log(key)
    console.log(obj[key]) 
}

const subjects = ["Math", "Science", "History"];
for(let subject of subjects){
    console.log(subject);
}
