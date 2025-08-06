import Course from "../models/courseModel.js";

const getAssingedCourses = async (req, res) => {
    try {
        const lecturerID = req.user.id;
        const courses = await Course.find({instructor: lecturerID}).populate("studentsEnrolled", "fullName email")

        if(courses.length==0){
            return res.status(404).json({message: 'No assinged courses found!'})
        }

        res.status(200).json({message: 'Courses fetched sucessfully!', courses},)

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export default getAssingedCourses