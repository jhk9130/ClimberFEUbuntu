import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Climber } from '../climber';
import { ClimberService } from '../climber.service';

@Component({
  selector: 'app-climber-list',
  templateUrl: './climber-list.component.html',
  styleUrls: ['./climber-list.component.sass']
})
export class ClimberListComponent implements OnInit {

  climbers: Climber[] = [];

  constructor(private climberService: ClimberService,
    private router: Router) { }

  ngOnInit(): void {
    this.getClimbers();
  }

  private getClimbers() {
    this.climberService.getClimbersList().subscribe(data => {
      this.climbers = data;
    });
  }

  climberDetails(id: number) {
    this.router.navigate(['climber-details', id]);
  }

  updateClimber(id: number) {
    this.router.navigate(['update-climber', id]);
  }

  deleteClimber(id: number) {
    this.climberService.deleteClimber(id).subscribe(data => {
      console.log(data);
      this.getClimbers();
    })
  }

}
