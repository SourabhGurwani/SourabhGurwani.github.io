db.employees.find({name:{$regex:"a"}}) // display all docs where in name "a" is exist

// but it is caseSensitive

db.employees.find({name:{$regex:"c",$options:"i"}})  // options :"i" ignores case sensitive

db.employees.find({name:{$regex:"^c",$options:"i"}}) // all the  name begin with c

db.employees.find({name:{$regex:"y$",$options:"i"}}) // all the name ends with y


    