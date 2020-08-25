import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EletronicListComponent } from './eletronic-list.component';

describe('EletronicListComponent', () => {
  let component: EletronicListComponent;
  let fixture: ComponentFixture<EletronicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EletronicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EletronicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
