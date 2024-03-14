import { Document } from 'mongoose';

export interface ISettings {
  forumId: string,
  status: 'actual' | 'completed' | 'uncompleted',
  remove: boolean,
}

export interface IAdditionalFields {
  fieldName: string,
  fieldType: 'string' | 'array',
}

export interface IBoard extends Document {
  boardId: string,
  url: string,
  userLogin: string | null,
  userPassword: string | null,
  century: string | null,
  excluded: {
    users: string[],
    topics: string[],
  },
  adminIds: string[],
  settings: ISettings,
  additionalFields: IAdditionalFields,
  twinks: string[][],
}

export interface IChronology {
  boardId: string,
  title: string | null,
  topicId: string | null,
  date: string,
  visibleDate: string | null,
  order: number,
  status: string,
  characters: string[],
  tags: string[],
  description: string,
}
