import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  console.log("Cookies:", req.cookies);
  const token = req.cookies.token;

  if (!token) {
    console.log("No token found");
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token valid:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Invalid token error:", error.message);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default verifyToken
