import User from "../models/userModel.js";

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
    if(!user) {
        return res.status(404).json({message: "User not found!"})
    }
    res.status(200).json({message: "User deleted succesfully!"})
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//Admin Course Management Logic



export { getUser, editUser, deleteUser, addCourses, getCourses, updateCourses, deleteCourses };
