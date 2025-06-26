db.orders.insertMany(
    [
    {
        empId: ObjectId('685a8a61ccbee16b87117b7b'),
        orderValue : 1200
    },
     {
        empId:  ObjectId('685bb92a25ec75c61e117b7b'),
        orderValue : 2500
    },
     {
        empId:   ObjectId('685bca3468fe12c0bb117b7b'),
        orderValue : 999
    },
     {
        empId:  ObjectId('685bca3468fe12c0bb117b7b'),
        orderValue : 765
    },
     {
        empId:  ObjectId('685bca3468fe12c0bb117b7c'),
        orderValue : 3400
    },
])

db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empId",
        as: "orders",
    }}
])

db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empId",
        as: "orders",
    },
},
{$unwind:"$orders"},
{$project:{name:1, "orders.orderValue":1}},
{$match :{"orders.orderValue":{$gt : 2000}}}


])