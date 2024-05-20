import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpreadmodalComponent } from '../../../ngx-spreadmodal/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxSpreadmodalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-spreadmodal';
  @ViewChild('spread') spread!: NgxSpreadmodalComponent;

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
