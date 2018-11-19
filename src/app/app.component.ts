import { Component, ViewChild } from '@angular/core';
import { NgxSpreadmodalComponent } from './../../projects/ngx-spreadmodal/src/lib/ngx-spreadmodal.component';
// import { NgxSpreadmodalComponent } from 'ngx-spreadmodal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-spreadmodal';
  @ViewChild('spread') spread: NgxSpreadmodalComponent;


  openDialog() {
    console.log('opening modal');
    this.spread.openModal().then(() => {
      console.log('opened');

    });
  }

  submitForm() {
    console.log('closing modal with submit');
    this.spread.closeModal().then(() => {
      console.log('closed');
    });
  }

  cancel() {
    console.log('closing modal with cancel');
    this.spread.closeModal().then(() => {
      console.log('closed');
    });
  }

}
