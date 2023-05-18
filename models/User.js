import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email must be unique"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
});

const User = models.User || model("User", userSchema);

export default User;
