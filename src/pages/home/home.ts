import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { LibraryService } from '../../providers/library-service';
import { Library } from '../../schema/library';
import { MealService } from '../../providers/meal-service';
import { Meal } from '../../schema/meal';

import { ObjectID } from 'bson';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // TODO Make mealTypes accessible to other components (similar to loadLibraries() problem).
  mealTypes = ['Breakfast', 'AM Snack', 'Lunch', 'PM Snack', 'Supper'];
  selectedMealType = this.mealTypes[0];

  libraries: Library[];

  selectedLibrary: Library;
  // TODO Update selectedDate to show local US/Pacific time.
  selectedDate = new Date().toISOString();

  //  TODO Organize mealInventory and tallies into more legible objects.
  mealInventories = [
    {name: 'Received', count: 0},
    {name: 'Leftovers', count: 0}
  ];
  tallies = [
    {name: 'Staff', count: 0},
    {name: 'Children', count: 0},
    {name: 'Adult', count: 0},
    {name: 'Volunteers', count: 0},
    {name: 'Non-reimbursable', count: 0}
  ];

  signature: string;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private libraryService: LibraryService,
              private mealService: MealService) {
  }

  ionViewDidLoad() {
    // TODO Replace these redundant loadLibraries() calls to the server.
    this.libraryService.loadLibraries().subscribe(data => {
      this.libraries = data;
      this.selectedLibrary = this.libraries[0];
    }, err => {
      this.showPageErrorAlert();
    });
  }

  setCount(mealItem) {
    // TODO Open number input to set custom count; OR replace buttons with ion-input?
  }

  increaseCount(mealItem) {
    mealItem.count++;
  }

  decreaseCount(mealItem) {
    mealItem.count--;
    mealItem.count = (mealItem.count < 0) ? 0 : mealItem.count;
  }

  resetCounts() {
    this.mealInventories.forEach(mi => mi.count = 0);
    this.tallies.forEach(t => t.count = 0);
  }

  addMeal() {
    var meal = {
      date: this.selectedDate,
      library_id: new ObjectID(this.selectedLibrary._id),
      mealType: this.selectedMealType,
      numReceivedMeals: this.mealInventories.find(x => x.name === 'Received').count,
      numLeftoverMeals: this.mealInventories.find(x => x.name === 'Leftovers').count,
      numStaffMeals: this.tallies.find(x => x.name === 'Staff').count,
      numChildrenMeals: this.tallies.find(x => x.name === 'Children').count,
      numAdultMeals: this.tallies.find(x => x.name === 'Adult').count,
      numVolunteerMeals: this.tallies.find(x => x.name === 'Volunteers').count,
      numWastedMeals: this.tallies.find(x => x.name === 'Non-reimbursable').count,
      signature: this.signature
    } as Meal;

    this.mealService.add(meal).subscribe(data => {
        this.showMealSavedAlert();
      }, err => {
        this.showMealErrorAlert();
    });
  }

  showMealSavedAlert() {
    let alert = this.alertCtrl.create({
      title: 'Meals Saved',
      subTitle: 'We\'ve added these meals to the tally. Thanks for helping out!',
      buttons: ['OK']
    });
    alert.present();
  }

  showMealErrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error Saving Meals',
      subTitle: 'There was an error while adding these meals to the tally. Could you try again?',
      buttons: ['OK']
    });
    alert.present();
  }

  showPageErrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'There was an error loading the home page. Please try refreshing the page again.',
      buttons: ['OK']
    });
    alert.present();
  }

}
