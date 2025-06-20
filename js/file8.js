//objects

const student={
    name:"sourabh",
    age:22,
};
// console.log(student)
// console.log(student.name)
// console.log(student["name"])

student.city="Delhi"
// console.log(student)

// delete student.age // will delete the property of age in student
// console.log(student)

// const keys = Object.keys(student) ... students obj keys will store in Array form
// console.log(keys)

// const values = Object.values(student)
// console.log(values)


const cart={
    1: 5,
    3:1,
    5:2
}
const items = Object.keys(cart).length // 
console.log(items)

cart[3]= cart[3]+1
console.log(cart)



