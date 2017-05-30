import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { LibraryService } from '../../providers/library-service';
import { MealService } from '../../providers/meal-service';
import { Report } from '../../schema/report';


@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {

  startDate: string;
  endDate: string;

  // String slices of year, month and date.
  start: string;
  end: string

  reports: any;

  pdfFileName = "test.pdf";

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private libraryService: LibraryService,
              private mealService: MealService) {
  }

  ionViewDidLoad() {
    this.setDates();
  }

  setDates() {
    // Set default end date to today; set start date to six days ago.
    var now = new Date();
    now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var weekAgo = new Date(now.getTime());
    weekAgo.setDate(weekAgo.getDate() - 6);
    this.endDate = now.toISOString();
    this.startDate = weekAgo.toISOString();
  }

  getMealReport() {
    this.start = this.startDate.slice(0, 10);
    this.end = this.endDate.slice(0, 10);
    this.mealService.get(this.start, this.end).subscribe(reports => this.reports = reports);
  }

  savePDF(reports: Report[]) {
    // Create a pdf named this.pdfFileName from results loaded into this.report.
    var jsPDF = require('jspdf');
    var doc = new jsPDF();
    // TODO Identify pdf layout requirements for actual weekly report.
    doc.text(10, 10, 'SJPL Weekly Meal Report');
    doc.text(10, 20, `Date: ${this.start} to ${this.end}`);

    doc.text(110, 70, 'Received meals', null, 90);
    doc.text(125, 70, 'Leftover meals', null, 90);
    doc.text(140, 70, 'Staff meals', null, 90);
    doc.text(155, 70, 'Children meals', null, 90);
    doc.text(170, 70, 'Adult meals', null, 90);
    doc.text(185, 70, 'Volunteer meals', null, 90);
    doc.text(200, 70, 'Wasted meals', null, 90);

    for (var i = 0; i < reports.length; i++) {
      var libraryName = reports[i]._id.library.replace(' Branch Library', '');
      doc.text(10, 90 + 10 * i, `${libraryName} (${reports[i]._id.mealType})`);
      doc.text(105, 90 + 10 * i, `${reports[i].totalReceived}`);
      doc.text(120, 90 + 10 * i, `${reports[i].totalLeftover}`);
      doc.text(135, 90 + 10 * i, `${reports[i].totalStaff}`);
      doc.text(150, 90 + 10 * i, `${reports[i].totalChildren}`);
      doc.text(165, 90 + 10 * i, `${reports[i].totalAdult}`);
      doc.text(180, 90 + 10 * i, `${reports[i].totalReceived}`);
      doc.text(195, 90 + 10 * i, `${reports[i].totalWasted}`);
    }

    doc.save(this.pdfFileName);

    this.showReportAlert();
  }

  showReportAlert() {
    let alert = this.alertCtrl.create({
      title: 'Report generated!',
      subTitle: 'Check out the results.',
      buttons: ['OK']
    });
    alert.present();
  }

}
