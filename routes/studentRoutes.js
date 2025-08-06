import express from 'express'
import {getCourses, enrollCourse, enrollCourseList} from '../controllers/studentController.js'

const router = express.Router()


router.get('/courses', getCourses)
router.post('/courses/:id/enroll', enrollCourse)
router.get('/courses/enrolled-courses', enrollCourseList)

export default router