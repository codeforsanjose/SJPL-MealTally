import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

import { LibraryService } from '../../providers/library-service';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'LogPage';
  tab3Root = 'ReportPage';

  constructor(private libraryService: LibraryService) {
  }

  ionViewDidLoad() {
    this.libraryService.loadLibraries().subscribe(data => {
        this.libraryService.libraries = data;
      }, err => {
        console.log(err);
      });
  }
}
