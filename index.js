const router = require('express').Router();

const students = [
    {
        name: "Future",
        DOB: "19/01/2000",
        program: "BSC CS",
        level: "300",
        image:"/images/a.png"
    },
    {
        name: "King Tah",
        DOB: "14/10/2000",
        program: "BSC CS",
        level: "100",
        image:"/images/b.png"
    },
    {
        name: "Peter Opoku",
        DOB: "12/10/2001",
        program: "BSC ICT",
        level: "400",
        image :"/images/c.png"
    },
    {
        name: "Dombo Adonko",
        DOB: "12/12/1990",
        program: "BSC MIS",
        level: "200",
        image:"/images/d.png"
    },
    {
        name: "Fresh Goku",
        DOB: "02/01/1999",
        program: "BSC CS",
        level: "100",
        image:"/images/e.png"
    }
]


router.get('/', (req, res)=>{
    res.render('home', {
        title:'Home',
        students
    })
});

router.get('/student/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render('student', {
        title: students[id].name,
        student
    })
});

module.exports = router;