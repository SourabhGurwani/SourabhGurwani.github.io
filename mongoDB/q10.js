db.posts.insertMany([
    {
        id:"p1",
        post: "post1"
    },
    {
        id:"p2",
        post:"post2"
    }
])

db.comments.insertMany([
    {
        id:"c1",
        pid:"p1",
        comment : "comment1"
    },
    {
        id:"c2",
        pid:"p1",
        comment : "comment2"
    },
    {
        id:"c3",
        pid:"p2",
        comment : "comment1"
    },
    {
        id:"c4",
        pid:"p2",
        comment : "comment2"
    },
    {
        id:"c5",
        pid:"p2",
        comment : "comment3"
    },
])

db.posts.aggregate([
    {$lookup:{
        from:"comments",
        localField:"id",
        foreignField:"pid",
        as: "Comments",
    },
},
{$unwind:"$Comments"},
{$project:{post:1,comment: "$Comments.comment",_id:0}}

])

db.comments.insertOne({
    id:"c6",
    pid:"p2",
    comment:"comment4"

})