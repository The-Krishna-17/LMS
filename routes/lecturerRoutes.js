import express from 'express'
import getAssingedCourses from '../controllers/lecturerController.js'

const router = express.Router()

router.get('/assinged-courses', getAssingedCourses)

export default router