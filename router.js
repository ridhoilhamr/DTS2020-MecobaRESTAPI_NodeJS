import express from 'express';
import Homework from './database.js';
const router = express.Router();

//@decs Create new homework
//@route POST /api/homework
router.post('/homework', async (req,res) => {
    try {
        const {course, title, due_date, status} = req.body;

        const homework = new Homework({
            course,
            title,
            due_date,
            status,
        });

        const createHomework = await homework.save();

//201= created server
        res.status(201).json(createHomework);

    } catch (err) {
        console.log(err)
// 501= error sever
        res.status(500).json({ error: 'Database creation failed'});
    }
});



export default router;