import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Climber } from '../climber';
import { ClimberService } from '../climber.service';

@Component({
  selector: 'app-update-climber',
  templateUrl: './update-climber.component.html',
  styleUrls: ['./update-climber.component.sass']
})
export class UpdateClimberComponent implements OnInit {

  id!: number;
  climber: Climber = new Climber();
  constructor(private climberService: ClimberService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.climberService.getClimberById(this.id).subscribe(data => {
      this.climber = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.climberService.updateClimber(this.id, this.climber).subscribe(data => {
      this.goToClimberList();
    }, error => console.log(error));
  }

  goToClimberList() {
    this.router.navigate(['/climbers']);
  }

}
