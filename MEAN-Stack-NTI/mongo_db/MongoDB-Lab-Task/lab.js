// create and use database
db = db.getSiblingDB('FacultySystemDB')

// insert 1 student
db.students.insertOne({
    FirstName: "Ahmed",
    LastName: "Ali",
    Age: 22,
    Faculty: { Name: "Engineering", Address: "Cairo" },
    Grades: [
        { CourseName: "Math", Grade: 85, Pass: true },
        { CourseName: "Physics", Grade: 70, Pass: true }
    ],
    IsFired: false
})

// insert more than one student
db.students.insertMany([
    {
        FirstName: "Sara",
        LastName: "Ahmed",
        Age: 20,
        Faculty: { Name: "Computer Science", Address: "Giza" },
        Grades: [
            { CourseName: "Database", Grade: 90, Pass: true }
        ],
        IsFired: false
    },
    {
        FirstName: "Omar",
        LastName: "Hassan",
        Age: 19,
        Faculty: { Name: "Commerce", Address: "Alexandria" },
        Grades: [
            { CourseName: "Accounting", Grade: 45, Pass: false }
        ],
        IsFired: true
    }
])


// --- find queries ---

// get all students
db.students.find()

// find by first name
db.students.find({ FirstName: "Ahmed" })

// find if first name is Ahmed or last name is Ahmed
db.students.find({
    $or: [
        { FirstName: "Ahmed" },
        { LastName: "Ahmed" }
    ]
})

// first name not equal Ahmed
db.students.find({ FirstName: { $ne: "Ahmed" } })

// age less than 21
db.students.find({ Age: { $lt: 21 } })

// get fired students
db.students.find({ IsFired: true })

// age >= 21 and faculty exists
db.students.find({
    Age: { $gte: 21 },
    Faculty: { $ne: null }
})

// select specific fields only
db.students.find(
    { FirstName: "Ahmed" },
    { FirstName: 1, LastName: 1, IsFired: 1, _id: 0 }
)


// --- update ---

// change last name for Ahmed
db.students.updateOne(
    { FirstName: "Ahmed" },
    { $set: { LastName: "Ibrahim" } }
)


// --- index ---

// make index on FirstName
db.students.createIndex({ FirstName: 1 })


// --- delete field and docs ---

// remove IsFired field from Sara
db.students.updateOne(
    { FirstName: "Sara" },
    { $unset: { IsFired: "" } }
)

// delete fired students
db.students.deleteMany({ IsFired: true })

// delete all students from collection
db.students.deleteMany({})

// drop students collection
db.students.drop()

// drop database
db.dropDatabase()


// --------------------------------------------------
// Part 2: FacultySystemV2 database

db = db.getSiblingDB('FacultySystemV2')

// insert in Faculty collection
db.Faculty.insertMany([
    { FacultyName: "Engineering", Address: "Cairo" },
    { FacultyName: "Computer Science", Address: "Giza" }
])

// insert in Course collection
db.Course.insertMany([
    { CourseName: "NodeJS", FinalMark: 100 },
    { CourseName: "React", FinalMark: 100 }
])

// insert in students collection
db.students.insertMany([
    {
        FirstName: "Mohamed",
        LastName: "Khaled",
        IsFired: false,
        FacultyID: 1,
        courses: [
            { CourseID: 101, grade: 88 },
            { CourseID: 102, grade: 95 }
        ]
    },
    {
        FirstName: "Mona",
        LastName: "Mahmoud",
        IsFired: false,
        FacultyID: 2,
        courses: [
            { CourseID: 101, grade: 75 }
        ]
    }
])