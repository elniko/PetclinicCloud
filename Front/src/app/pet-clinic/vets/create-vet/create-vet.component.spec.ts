import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVetComponent } from './create-vet.component';

describe('CreateVetComponent', () => {
  let component: CreateVetComponent;
  let fixture: ComponentFixture<CreateVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
