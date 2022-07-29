import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClimberComponent } from './create-climber/create-climber.component';
import { UpdateClimberComponent } from './update-climber/update-climber.component';
import { ClimberDetailsComponent } from './climber-details/climber-details.component';
import { ClimberListComponent } from './climber-list/climber-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClimberComponent,
    UpdateClimberComponent,
    ClimberDetailsComponent,
    ClimberListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
