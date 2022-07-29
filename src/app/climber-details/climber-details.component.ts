import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Climber } from '../climber';
import { ClimberService } from '../climber.service';

@Component({
  selector: 'app-climber-details',
  templateUrl: './climber-details.component.html',
  styleUrls: ['./climber-details.component.sass']
})
export class ClimberDetailsComponent implements OnInit {

  id!: number
  climber!: Climber
  constructor(private route: ActivatedRoute, private climberService: ClimberService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.climberService.getClimberById(this.id).subscribe(data => {
      this.climber = data;
    });
  }

}
