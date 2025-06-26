db.employees.createIndex({"email":1})

db.employees.getIndexes()


db.employees.find({email:"john@gmail.com"}).explain("executionStats")

db.employees.dropIndex("email_1")



db.demoData.insertMany([
    {
        name:"Krish",
        Country :"India",
        score:20
    },
    {
        name:"Krish",
        Country :"India",
        score:21
    },
    {
        name:"Krish",
        Country :"India",
        score:22
    },
    {
        name:"John",
        Country :"USA",
        score:25
    },
    {
        name:"John",
        Country :"USA",
        score:21
    },

])



db.demoData.aggregate([
    {$group :{_id:{Country: "$Country", name :"$name"},
      total:{$sum:"$score"}}}
])