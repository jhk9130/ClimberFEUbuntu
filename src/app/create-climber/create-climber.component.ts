import { Component, OnInit } from '@angular/core';
import { Climber } from '../climber';

@Component({
  selector: 'app-create-climber',
  templateUrl: './create-climber.component.html',
  styleUrls: ['./create-climber.component.sass']
})
export class CreateClimberComponent implements OnInit {

  climber: Climber = new Climber();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { }
}
