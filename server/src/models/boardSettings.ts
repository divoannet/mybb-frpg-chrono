import mongoose, {Schema} from 'mongoose';
import { IAdditionalFields, IBoard, ISettings } from "./types";

const settingSchema = new Schema<ISettings>({
  forumId: {type: String, required: true},
  status: {type: String, enum: ['actual', 'completed', 'uncompleted']},
  remove: {type: Boolean, required: true},
});

const additionalFieldSchema = new Schema<IAdditionalFields>({
  fieldName: {type: String, required: true},
  fieldType: {type: String, enum: ['string', 'array'], required: true},
});

const boardSchema = new Schema<IBoard>({
  boardId: {type: String, required: true},
  url: {type: String, required: true},
  userLogin: {type: String},
  userPassword: {type: String},
  century: {type: String},
  excluded: {
    users: [String],
    topics: [String],
  },
  adminIds: [String],
  settings: [settingSchema],
  additionalFields: [additionalFieldSchema],
  twinks: [[String]],
});

const BoardSettings = mongoose.model<IBoard>('BoardSettings', boardSchema);

export default BoardSettings;
