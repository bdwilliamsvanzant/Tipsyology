import { Component } from '@angular/core';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public selectedSection: String = "Ingredients";
  constructor() {}
  // event handler to select section to display
  async selectedSeg(ev){
     this.selectedSection = ev.target.id;
  }
}
