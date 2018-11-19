import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSpreadmodalComponent } from './ngx-spreadmodal.component';

describe('NgxSpreadmodalComponent', () => {
  let component: NgxSpreadmodalComponent;
  let fixture: ComponentFixture<NgxSpreadmodalComponent>;
  let initialProperties = {};

  beforeEach(async(() => {
    initialProperties = {
      open: false,
      showContent: false,
      spreadAnimateDuration: 700,
      contentAnimateDuration: 700
    };
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSpreadmodalComponent]
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

  it('expect initialProperties with values to be defined', () => {
    expect(component).toEqual(jasmine.objectContaining(initialProperties));
  });

  it('#openModal() should set #open and #showContent to true', (done) => {
    component.openModal().then(() => {
      expect(component.open).toBe(true);
      expect(component.showContent).toBe(true, 'on after click');
      done();
    });
  });


  it('#closeModal() should set #open and #showContent to false', (done) => {
    component.closeModal().then(() => {
      expect(component.open).toBe(false);
      expect(component.showContent).toBe(false, 'on after click');
      done();
    });
  });

});
