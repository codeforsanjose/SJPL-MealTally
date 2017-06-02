import { ObjectID } from 'bson';

export class Meal {
  _id: ObjectID;
  date: string;
  library: string;
  mealType: string;
  numReceivedMeals: number;
  numLeftoverMeals: number;
  numStaffMeals: number;
  numChildrenMeals: number;
  numAdultMeals: number;
  numVolunteerMeals: number;
  numWastedMeals: number;
  signature: string;
}
