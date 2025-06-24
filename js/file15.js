//json => APIs: Data exchange between frontend ↔ backend
const student='{"name":"Amy","age":21}'
const s=JSON.parse(student)
console.log(s.name)
console.log(JSON.stringify(s))

