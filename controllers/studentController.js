import Course from "../models/courseModel.js";

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({}).populate("instructor", "fullName email")
        if(courses.lenght == 0) {
            return res.status(404).json({message: 'No course found!'})
        }
        res.status(200).json({message: 'Courses found sucessfully!', courses: courses})
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

const enrollCourse = async (req, res) => {
    try {
        const courseID = req.params.id;
        const studentID = req.user.id;

        const course = await Course.findById(courseID);
        if(!course){
            return res.status(404).json({message: 'Course not found!'})
        }

        if(course.studentsEnrolled.includes(studentID)){
            return res.status(400).json({message: "You are already enrolled in this cours!"})
        }

        course.studentsEnrolled.push(studentID)
        await course.save()

        res.status(200).json({message: "Course enrolled sucessfully!", course})
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

const enrollCourseList = async (req, res) => {
    try {
        const studentID = req.user.id;
        const enrolledCourses = await Course.find({
            studentsEnrolled: studentID
        }).populate("instructor", "fullName email")

        if(enrolledCourses.length == 0){
            return res.status(404).json({message: 'You are not enrolled in any courses!'})
        }

        res.status(200).json({message:'Enrolled courses feteched sucessfully!', courses: enrolledCourses})
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export {getCourses, enrollCourse, enrollCourseList}