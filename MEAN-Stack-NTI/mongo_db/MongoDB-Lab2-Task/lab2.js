// use FacultySystemV2 database
db = db.getSiblingDB('FacultySystemV2')


// 1. get student with highest grade in course 101
db.students.aggregate([
    { $unwind: "$courses" },
    { $match: { "courses.CourseID": 101 } },
    { $sort: { "courses.grade": -1 } },
    { $limit: 1 }
])


// 2. sum grades for each student
db.students.aggregate([
    { $unwind: "$courses" },
    {
        $group: {
            _id: "$_id",
            studentName: { $first: "$FirstName" },
            totalGrades: { $sum: "$courses.grade" }
        }
    }
])


// 3. average age of students
db.students.aggregate([
    {
        $group: {
            _id: null,
            avgAge: { $avg: "$Age" }
        }
    }
])


// 4. count total number of students
db.students.countDocuments()


// 5. get students who took more than 1 course
db.students.find({
    $expr: { $gt: [{ $size: "$courses" }, 1] }
})


// 6. sort students by FirstName ascending
db.students.find().sort({ FirstName: 1 })


// 7. sort students by Age descending
db.students.find().sort({ Age: -1 })


// 8. skip first student and get next 2
db.students.find().skip(1).limit(2)


// 9. add new course to student Mohamed
db.students.updateOne(
    { FirstName: "Mohamed" },
    {
        $push: {
            courses: { CourseID: 103, grade: 90 }
        }
    }
)


// 10. update grade of CourseID 101 for Mona
db.students.updateOne(
    { FirstName: "Mona", "courses.CourseID": 101 },
    {
        $set: { "courses.$.grade": 85 }
    }
)


// 11. remove CourseID 102 from Mohamed
db.students.updateOne(
    { FirstName: "Mohamed" },
    {
        $pull: {
            courses: { CourseID: 102 }
        }
    }
)