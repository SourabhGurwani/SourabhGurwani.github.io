//update mike salary
db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$set:{salary:3000}}

)

db.employees.updateOne(
    {department:"IT"}, //it will not make everyone salary =3000 whose department is "IT"
    {$set:{salary:3000}} // .. but the first one whose department is "IT" ,because updateOne for one only
)

db.employees.updateMany(
    {},
    {$set:{point:1}} // creates points on table
)

db.employees.updateMany(
    {department:"IT"},
    {$inc:{point:1}}  //increase points whose department is IT
)

db.employees.updateOne(
    {email: "krish@gmail.com"},
    {$set:{name: "Krish",department : "HR",salary:2700}},
    {upsert:true}  //**upsert** = update + insert
)

db.employees.deleteOne({email:"krish@gmail.com"})

db.employees.find().sort({name:1})  //sort in ascending
db.employees.find().sort({salary : -1}).limit(1) //sort in descending => highest salary by limit 1

db.employees.find({},{_id:0,EmpName:"$name"}) //name => EmpName , ONLY FOR SHOW/PRINT not in real db

db.employees.updateMany(
    {},
    {$rename:{point :"score"}}
)

db.employees.updateMany(
    {},
    {$unset:{score :""}}
)

db.employees.updateMany(
    {},
    {$push:{points:3}} //we create points and push as a Array
)
db.employees.updateMany(
    {department:"IT"},
    {$pull:{points:{$gt:3}}}  // pull(delete) points greater > 3 in IT dept

)

db.employees.updateMany(
    {},
    {$addToSet:{location : "LA"}}  
)

//push => push to one thing as many times
// addToSet => add/push one time only..unique



