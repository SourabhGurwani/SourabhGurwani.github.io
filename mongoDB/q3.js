db.employees.find().skip(1) // will skip first entry of table
db.employees.find().limit(1)  // will show the first entry
db.employees.find().skip(1).limit(1) // 1st => skip and 2nd only show

db.employees.find({department:"IT"}) // will display whose department is "IT"


//department , "IT" both are object , eq(equality) is property
db.employees.find(
    {department:{eq:"IT"}}, 
    {_id:0,name:1,salary:1} 
)

db.employees.find(
    {salary:{$gt:3000}}, // gt = greater than
    {_id:0,name:1,salary:1} 
)

db.employees.find(
    {salary:{$lte:3000}}, //lte=> less than equal to..
    {_id:0,name:1,salary:1} 
)


db.employees.find(
    {$or:[{salary:{$lte:3000}},{department:"IT"}]},  
    {_id:0,name:1,salary:1} 
)

db.employees.find(
    {$and:[{salary:{$lte:3000}},{department:"IT"}]}, 
    {_id:0,name:1,salary:1} 
)

//syntax :  {$or : [{cond 1 },{cond 2}] }

