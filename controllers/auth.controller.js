import userModel from "../models/user.model.js";
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from "../src/config/config.js";

export async function register (req, res) {
  const { userName, email, password } = req.body;

  const isAlreadyRegist = await userModel.findOne({
    $or: [
      { userName },
      { email }
    ]
  });
  if (isAlreadyRegist) {
    return res.status(409).json({
      message: "User name or email already registered"
    });
  }

  const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

  const user = await userModel.create({
    userName,
    email,
    password: hashedPassword
  });

  const token = jwt.sign(
    { id: user._id },
    config.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.status(201).json({
    message: "User registered successfully",
    user: {
      username: user.userName,
      email: user.email
    },
    token,
  });
}
