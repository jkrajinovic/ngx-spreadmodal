# NgxSpreadmodal
If you need a modal that takes up whole screen, this modal does that
with some neat extra features.

[![Build Status](https://travis-ci.org/jkrajinovic/ngx-spreadmodal.svg?branch=master)](https://travis-ci.org/jkrajinovic/ngx-spreadmodal)

[DEMO](https://jkrajinovic.github.io/ngx-spreadmodal/docs/)

## Use it like this
In your component HTML file
```
<ngx-spreadmodal #spread>
Modal content goes here
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

To act upon modal animation completion use promise.

```
  openModal(){
    this.spread.openModal().then(() =>{
      console.log('modal opened');
    });
  }

  closeModal(){
    this.spread.closeModal().then(()=>{
      console.log('modal closed');
    });
  }
```

