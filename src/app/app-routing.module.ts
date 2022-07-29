import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimberDetailsComponent } from './climber-details/climber-details.component';
import { ClimberListComponent } from './climber-list/climber-list.component';
import { CreateClimberComponent } from './create-climber/create-climber.component';
import { UpdateClimberComponent } from './update-climber/update-climber.component';

const routes: Routes = [
  {path: 'climbers', component: ClimberListComponent},
  {path: '', redirectTo: 'climbers', pathMatch: 'full'},
  {path: 'create-climber', component: CreateClimberComponent},
  {path: 'update-climber/:id', component: UpdateClimberComponent},
  {path: 'climber-details/:id', component: ClimberDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
