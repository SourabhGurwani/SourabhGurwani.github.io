db.employees.aggregate([
    {$project: {
        _id:0,
        name:1,
        salary:1,
        Grade:{$cond:[{$gt:["$salary",3000]},"Grade A","Grade B"]} 
    }},


])



db.employees.aggregate([
    {$project: {
        _id:0,
        name:1,
        salary:1,
        Grade:{$cond:{
            if:{$gt:["$salary",3000]},
            then:"Grade A",
            else: "Grade B"
        }

        }
    }},

    {$out:"GradeWiseSalary"} // it will store in new collection

])


db.createView("viewname","collectionName",)

db.createView("salaryView","employees",[
    {$project: {
        _id:0,
        name:1,
        salary:1,
        Grade:{$cond:{
            if:{$gt:["$salary",3000]},
            then:"Grade A",
            else: "Grade B"
        }

        }
    }},

])

// view can't be modifty
// view is virtual view..not store in DB(that is one of the reason we can't modify on it)

