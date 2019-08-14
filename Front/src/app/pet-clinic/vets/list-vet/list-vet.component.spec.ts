import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVetComponent } from './list-vet.component';

describe('ListVetComponent', () => {
  let component: ListVetComponent;
  let fixture: ComponentFixture<ListVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
