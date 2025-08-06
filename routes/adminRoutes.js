import express from 'express'
import { getUser, editUser, deleteUser, addCourses, getCourses, updateCourses, deleteCourses } from '../controllers/adminController.js'

const router = express.Router()


// admin's user routes
router.get('/user', getUser)
router.put('/user/:id', editUser)
router.delete('/user/:id', deleteUser)

// admin's course routes
router.post('/courses', addCourses)
router.get('/courses', getCourses)
router.put('/courses/:id', updateCourses)
router.delete('/courses/:id', deleteCourses)


export default router