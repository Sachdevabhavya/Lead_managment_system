const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generate_token } = require("../utils/generateToken");

// Register new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    const savedUser = await user.save();

    res.status(201).json({ id: savedUser._id, email: savedUser.email, role: savedUser.role });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    token = generate_token(user);

    if (!token) {
      return res.status(400).json({ message: "Token not generated" });
    }

    console.log("token generated success")
    console.log(token)
    return res.send(token)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    registerUser,
    loginUser,
}