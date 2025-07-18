db.marks.insertMany([
    {
        name:"John",
        term:"t1",
        subject:"maths",
        score:98
    },
    {
        name:"John",
        term:"t2",
        subject:"maths",
        score:90
    },
    {
        name:"John",
        term:"t3",
        subject:"maths",
        score:88
    },
    {
        name:"John",
        term:"t1",
        subject:"science",
        score:92
    },
    {
        name:"John",
        term:"t2",
        subject:"science",
        score:82
    },
    {
        name:"John",
        term:"t3",
        subject:"science",
        score:82
    },

    {
        name:"Cathy",
        term:"t1",
        subject:"maths",
        score:92
    },
    {
        name:"Cathy",
        term:"t2",
        subject:"maths",
        score:92
    },
    {
        name:"Cathy",
        term:"t3",
        subject:"maths",
        score:82
    },

    {
        name:"Cathy",
        term:"t1",
        subject:"science",
        score:92
    },
    {
        name:"Cathy",
        term:"t2",
        subject:"science",
        score:82
    },
    {
        name:"Cathy",
        term:"t3",
        subject:"science",
        score:80
    },
])

db.marks.aggregate([
    {$group:{_id:"$name",AvgScore:{$avg:"$score"}}},

])

db.marks.aggregate([
    {$match:{name:"John"}},
    {$group:{_id:{Name:"$name",Term:"$term"},
    AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
  
])

db.marks.aggregate([
    {$group:{_id:{Name:"$name",Subject:"$subject"},
    AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
    
])

