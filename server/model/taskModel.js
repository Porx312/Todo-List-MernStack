import mongoose from 'mongoose';
const { Schema } = mongoose;
import { v4 as uuidv4 } from 'uuid';

const taskSchema = new Schema({
  title: { type: String, required: true },
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  _id: { type: String, default: uuidv4 }
});

const Task = mongoose.model('todo', taskSchema);

export default Task;