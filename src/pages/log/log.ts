import { IonicPage } from 'ionic-angular';
import { Component} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { LibraryService } from '../../providers/library-service';
import { Library } from '../../schema/library';
import { LogService } from '../../providers/log-service';
import { Log } from '../../schema/log';

import { ObjectID } from 'bson';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html'
})
export class LogPage {

  selectedLibrary: Library;
  selectedLogType: string;
  // TODO Update selectedDate to print local US/Pacific time.
  selectedDate = moment().format();
  description: string;
  temperature: number;  // Fahrenheit
  comment: string;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private libraryService: LibraryService,
              private logService: LogService) {
  }

  addLog() {
    var log = {
      date: this.selectedDate,
      library_id: new ObjectID(this.selectedLibrary._id),
      logType: this.selectedLogType,
      description: this.description,
      temperature: this.temperature,
      comment: this.comment
    } as Log;

    this.logService.add(log).subscribe(data => {
        this.showLogSavedAlert();
      }, err => {
        this.showLogErrorAlert();
    });
  }

  showLogSavedAlert() {
    let alert = this.alertCtrl.create({
      title: 'Logs Saved',
      subTitle: 'We\'ve added these logs to the tally. Thanks for helping out!',
      buttons: ['OK']
    });
    alert.present();
  }

  showLogErrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error Saving Logs',
      subTitle: 'There was an error while adding these logs to the tally. Could you try again?',
      buttons: ['OK']
    });
    alert.present();
  }

  showPageErrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'There was an error loading the logs page. Please try refreshing the page again.',
      buttons: ['OK']
    });
    alert.present();
  }

}
