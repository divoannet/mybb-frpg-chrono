import mongoose, { Schema } from 'mongoose';
import { IChronology } from "./types";

const chronologySchema = new Schema<IChronology>({
  boardId: { type: String, required: true },
  title: String,
  topicId: String,
  date: String,
  visibleDate: String,
  order: { type: Number, required: true },
  status: { type: String },
  characters: [String],
  tags: [String],
  description: String,
});

const Chronology = mongoose.model<IChronology>('Chronology', chronologySchema);

export default Chronology;
