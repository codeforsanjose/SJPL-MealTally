import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'LogPage';
  tab3Root = 'ReportPage';

  constructor() {

  }
}
