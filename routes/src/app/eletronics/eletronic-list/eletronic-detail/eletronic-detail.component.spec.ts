import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EletronicDetailComponent } from './eletronic-detail.component';

describe('EletronicDetailComponent', () => {
  let component: EletronicDetailComponent;
  let fixture: ComponentFixture<EletronicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EletronicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EletronicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
