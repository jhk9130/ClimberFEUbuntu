import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClimberComponent } from './update-climber.component';

describe('UpdateClimberComponent', () => {
  let component: UpdateClimberComponent;
  let fixture: ComponentFixture<UpdateClimberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClimberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClimberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
