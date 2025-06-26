db.empName.insertMany([
    {
        name:"Sourabh"
    },
    {
        name:"Raghav"
    },
    {
        name:"Harsh"
    },
    {
        name:"Arpit"
    },
    {
        name:"Shubham"
    },

])

db.empCountry.insertMany([
    {
        empID: ObjectId('685d1f9701f77c913a117b80'),
        Country: "India"
    },
    {
        empId:  ObjectId('685d1f9701f77c913a117b81'),
        Country: "USA"
    },
    {
        empId:  ObjectId('685d1f9701f77c913a117b82'),
        Country:"England"
    },
    {
        empId:ObjectId('685d1f9701f77c913a117b83'),
        Country : "India"
    },
    {
        empId : ObjectId('685d1f9701f77c913a117b84'),
        Country : "Pakisthan"
    }
])


db.empName.aggregate([
    {$lookup:{
        from:"empCountry",
        localField:"_id",
        foreignField:"empId",
        as: "Country",
    },
},
{$unwind:"$Country"},

])


db.empName.aggregate([
    {$lookup:{
        from:"empCountry",
        localField:"_id",
        foreignField:"empId",
        as: "Country",
    },
},
{$unwind:"$Country"},


])


db.orders.insertMany(
    [
    {
        empId: ObjectId('685d207d01f77c913a117b85'),
        orderValue : 1200
    },
     {
        empId:  ObjectId('685d207d01f77c913a117b86'),
        orderValue : 2500
    },
     {
        empId:   ObjectId('685d207d01f77c913a117b87'),
        orderValue : 999
    },
     {
        empId:  ObjectId('685d207d01f77c913a117b88'),
        orderValue : 765
    },
     {
        empId:  ObjectId('685d207d01f77c913a117b89'),
        orderValue : 3400
    },
])


db.empName.aggregate([
    {$lookup:{
        from:"empCountry",
        localField:"_id",
        foreignField:"empID",
        as: "Orders",
    },
},
{$unwind:"$Orders"},
{$project :{name:1,"Orders.orderValue":1,Countt}}

])