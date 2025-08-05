import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const foundUser = await User.findOne({ email });

    if (foundUser) {
      return res.status(400).json({ message: "User alredy exits!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User created succesfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(404).json({ message: "The email is not registered" });
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Inavalid password!" });
    }

    const token = jwt.sign({
        id: foundUser._id
    }, process.env.JWT_SECRET, {expiresIn: "2d"})

    res.cookie("token", token)

    res.status(200).json({ message: "Login Successful!", foundUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const logout = async (req, res) => {
    res.cookie("token", "", { expires: new Date(0) })
    res.status(200).json({message: "Logged out succesfully"})
}

export { signup, login, logout };
