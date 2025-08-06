import User from "../models/userModel.js";
import Course from "../models/courseModel.js";

// Admin User Mangement Logic
const getUser = async (req, res) => {
  try {
    const users = await User.find({});

    if (User.length === 0) {
      return res.status(404).json({ message: "No user registered!" });
    }

    res.status(200).json({ message: "Users list found successfully", users });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, role } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    if (role) user.role = role;

    await user.save();

    res.status(200).json({ message: "User updated sucessfully!", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({ message: "User deleted succesfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//Admin Course Management Logic

const addCourses = async (req, res) => {
  try {
    const { title, description, category, lessons, price, instructor } =
      req.body;

    if (
      !title ||
      !description ||
      !category ||
      !lessons ||
      price === undefined ||
      !instructor
    ) {
      return res.status(400).json({ message: "Missing the required field" });
    }

    const newCourse = new Course({
      title,
      description,
      category,
      lessons,
      price,
      instructor,
      studentsEnrolled: [],
    });

    await newCourse.save();

    res
      .status(201)
      .json({ message: "Course created successfully!", course: newCourse });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({}).populate("instructor", "fullName email").populate("studentsEnrolled", "fullName email")
        res.status(200).json({
            message: "Courses list fetched succesfully!", courses
        })
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

const updateCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, lessons, price, instructor } = req.body;

    if (!id) {
      return res.status(404).json({ message: 'Course ID not provided!' });
    }

    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found!' });
    }

    if (title) course.title = title;
    if (description) course.description = description;
    if (category) course.category = category;
    if (lessons) course.lessons = lessons;
    if (price !== undefined) course.price = price;
    if (instructor) course.instructor = instructor;

    await course.save();

    res.status(200).json({ message: 'Course updated successfully!', course });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


const deleteCourses = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Course ID is required!' });
    }

    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found!' });
    }

    res.status(200).json({ message: 'Course deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


export {
  getUser,
  editUser,
  deleteUser,
  addCourses,
  getCourses,
  updateCourses,
  deleteCourses,
};
