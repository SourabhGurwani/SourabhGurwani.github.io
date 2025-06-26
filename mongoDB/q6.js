db.employees.find(
    {salary:{$gt:3000}},
    {name:1}).limit(2).skip(1)


db.employees.countDocuments() // count the employees/ user/ entry


db.employees.aggregate([
    {$match:{salary:{$gt:2000}}},            // each object is called pipeline     
    {$project:{name:1,salary:1}},
    {$sort:{name:1}},
    {$limit :1},
])

db.employees.updateMany(
    {},
    {$addToSet : {location:"FL"}}
)

db.employees.aggregate([
    {$project : {_id:0,name:1,location:1}},
    {$unwind:"$location"}
])
// //.. unwind =>$unwind is an aggregation stage that deconstructs an array field from the input documents and creates a separate document for each element of the array.

db.employees.aggregate([
    {$project : {
        _id:0,
        EmpName:"$name",
        salary:1,
        bonus:{$multiply:["$salary",2]}

    }},
])

db.employees.aggregate([
    {$group:{
        _id:"$department", // group by dept
        total:{$sum:"$salary"} // total sum of each dept

    }}
]);

