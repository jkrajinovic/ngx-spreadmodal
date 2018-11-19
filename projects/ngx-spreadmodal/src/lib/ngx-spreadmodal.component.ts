import { Component } from '@angular/core';

@Component({
  selector: 'ngx-spreadmodal',
  template: `
    <div class="spread-modal" [ngClass]="{'open': open}">
      <div class="close-modal" [ngClass]="{'show': showContent}" (click)="closeModal()"></div>
      <div class="spread-modal-content" [ngClass]="{'showContent': showContent}">
          <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: ['.spread-modal {position: absolute; height: 0;  width: 0;  top: 50%; left: 50%; overflow: hidden; background: #fff; z-index: 99000000000; transition: all 0.4s cubic-bezier(0.1, 0.7, 1, 0.1); background: #f2f2f2;}.spread-modal-content {margin-top: -200px;  opacity: 0;  transition: all 0.7s ease-in-out;  padding: 20px;}.spread-modal-content.showContent {opacity: 1;  margin-top: 0;}.spread-modal.open {  width: 100%;  height: 100%;  top: 0;  left: 0;}.close-modal {  position: absolute;  right: 10px;  top: 10px;  cursor: pointer;  font-family: Verdana;  font-size: 2rem;  opacity: 0;  transition: all 0.3s ease-in-out; display: block; width: 30px;  height: 30px;}.close-modal:after{position: absolute;  width: 30px;  height: 30px; content: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcuOTcxIDQ3Ljk3MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuOTcxIDQ3Ljk3MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yOC4yMjgsMjMuOTg2TDQ3LjA5Miw1LjEyMmMxLjE3Mi0xLjE3MSwxLjE3Mi0zLjA3MSwwLTQuMjQyYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBMMjMuOTg2LDE5Ljc0NEw1LjEyMSwwLjg4CgkJYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDJsMTguODY1LDE4Ljg2NEwwLjg3OSw0Mi44NWMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0MgoJCUMxLjQ2NSw0Ny42NzcsMi4yMzMsNDcuOTcsMyw0Ny45N3MxLjUzNS0wLjI5MywyLjEyMS0wLjg3OWwxOC44NjUtMTguODY0TDQyLjg1LDQ3LjA5MWMwLjU4NiwwLjU4NiwxLjM1NCwwLjg3OSwyLjEyMSwwLjg3OQoJCXMxLjUzNS0wLjI5MywyLjEyMS0wLjg3OWMxLjE3Mi0xLjE3MSwxLjE3Mi0zLjA3MSwwLTQuMjQyTDI4LjIyOCwyMy45ODZ6Ii8+CjwvZz4KPC9zdmc+");}.close-modal img {width: 100%; height:auto;}.close-modal.show {opacity: 1;}']
})
export class NgxSpreadmodalComponent {

  open: boolean = false;
  showContent: boolean = false;

  spreadAnimateDuration: number = 700;
  contentAnimateDuration: number = 700;

  constructor() { }

  openModal(): Promise<NgxSpreadmodalComponent> {

    this.open = true;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.showContent = true;

        setTimeout(() => {
          resolve(this);
        }, this.contentAnimateDuration);

      }, this.spreadAnimateDuration);
    });

  }

  closeModal(): Promise<NgxSpreadmodalComponent> {

    this.showContent = false;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.open = false;

        setTimeout(() => {
          resolve(this);
        }, this.spreadAnimateDuration);

      }, this.contentAnimateDuration);
    });
  }

}
