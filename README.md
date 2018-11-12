# NgxSpreadmodal

If in any casy you need a modal
Wrap your ng stuff in a nicely animated modal that takes up whole screen.

## Use it like this
In your component HTML file
```
<ngx-spreadmodal #spread>
Modal content goes over hear
</ngx-spreadmodal>


<button (click)="openModal()">Open Modal</button>
<button (click)="closeModal()">Close Modal</button>
```

In your component class

```
import { Component, ViewChild} from '@angular/core';
import { NgxSpreadmodalComponent } from 'ngx-spreadmodal';

export class AppComponent {
  
  @ViewChild('spread') spread:NgxSpreadmodalComponent;

  openModal(){
    this.spread.openModal();
  }

  closeModal(){
    this.spread.closeModal();
  }
  }
```

