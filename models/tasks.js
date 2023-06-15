import mongoose, { Schema } from "mongoose";

const taskSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Task", taskSchema);
