import { ObjectID } from 'bson';

export class Log {
  _id: ObjectID;
  date: string;
  library_id: ObjectID;
  logType: string;
  description: string;
  temperature: number;
  comment: string;
}
