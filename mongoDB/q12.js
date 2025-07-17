db.studentInfo.insertMany([
    {id:"s1",name:"John"},
    {id:"s2",name:"Cathy"}
])

db.marks.updateMany(
    {},
    {$rename:{name:"sid"}}
)

db.marks.updateMany(
    {sid:"John"},
    {$set:{sid:"s1"}}
)

db.marks.updateMany(
    {sid:"Cathy"},
    {$set:{sid:"s2"}}
)


db.studentInfo.aggregate([
    {$match:{name:"John"}},
    {$lookup:{
        from:"marks",
        localField:"id",
        foreignField:"sid",
        as:"marks"
    },
},
{$unwind:"$marks"},
{$group:{_id:{Name:"$name",Term:"$marks.term"},
AvgScore:{$avg:"$marks.score"}}}
])
