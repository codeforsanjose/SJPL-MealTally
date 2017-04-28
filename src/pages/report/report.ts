import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { MealService } from '../../providers/meal-service';
import { Report } from '../../schema/report';


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

  report: Report;

  pdfFileName = "test.pdf";

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
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

  getMeals() {
    this.start = this.startDate.slice(0, 10);
    this.end = this.endDate.slice(0, 10);
    this.mealService.get(this.start, this.end).subscribe(report => this.report = report);
  }

  savePDF() {
    // Create a pdf named this.pdfFileName from results loaded into this.report.
    var jsPDF = require('jspdf');
    var doc = new jsPDF();
    // TODO Identify pdf layout requirements for actual weekly report.
    doc.text(20, 20, "SJPL Weekly Meal Report (All libraries)");
    doc.text(20, 30, `Date: ${this.start} to ${this.end}`);
    doc.text(20, 60, `Total received meals: ${this.report.totalReceived}`),
    doc.text(20, 70, `Total leftover meals: ${this.report.totalLeftover}`),
    doc.text(20, 80, `Total staff meals: ${this.report.totalStaff}`),
    doc.text(20, 90, `Total children meals: ${this.report.totalChildren}`),
    doc.text(20, 100, `Total adult meals: ${this.report.totalAdult}`),
    doc.text(20, 110, `Total volunteer meals: ${this.report.totalReceived}`),
    doc.text(20, 120, `Total wasted meals: ${this.report.totalWasted}`)
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
