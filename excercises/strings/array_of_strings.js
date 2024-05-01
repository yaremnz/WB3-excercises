const source = "dandy bianca finnley Nina";
const people = ["dandy", "bianca", "finnley", "kevin", "Nina"];

console.log(people[1]) // bianca is 1 away from the beginning
console.log(people[people.length - 1]) //get the last onne in the list regardless of size


// how can we print all
// console.log(people[0])
// console.log(people[1])
// console.log(people[2])
// console.log(people[3])
// console.log(people[4])

//loop e.g for loop is a way to repeat until a condition is false
for(let i=0;i<people.length;i++){
    const name = people[i]
    console.log(i, name) // get element at specific index of array
}

console.log("FINISH")