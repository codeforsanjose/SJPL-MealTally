import { IonicPage } from 'ionic-angular';
import { Component} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { LibraryService } from '../../providers/library-service';
import { Library } from '../../schema/library';
import { LogService } from '../../providers/log-service';
import { Log } from '../../schema/log';

import { ObjectID } from 'bson';

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html'
})
export class LogPage {

  selectedLibrary: Library;
  selectedLogType: string;
  // TODO Update selectedDate to print local US/Pacific time.
  selectedDate = new Date().toISOString();
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
        this.showLogAlert();
      }, err => {
        console.log(err);
    });
  }

  showLogAlert() {
    let alert = this.alertCtrl.create({
      title: 'Log posted!',
      subTitle: 'New mongodb document added in "logs" collection.',
      buttons: ['OK']
    });
    alert.present();
  }

}
