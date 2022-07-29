import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClimberComponent } from './create-climber.component';

describe('CreateClimberComponent', () => {
  let component: CreateClimberComponent;
  let fixture: ComponentFixture<CreateClimberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClimberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClimberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
