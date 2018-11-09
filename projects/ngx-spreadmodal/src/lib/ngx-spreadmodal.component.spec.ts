import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSpreadmodalComponent } from './ngx-spreadmodal.component';

describe('NgxSpreadmodalComponent', () => {
  let component: NgxSpreadmodalComponent;
  let fixture: ComponentFixture<NgxSpreadmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSpreadmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSpreadmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
