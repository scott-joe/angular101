import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component';
import { HabitListComponent } from './habit-list/habit-list.component';

@NgModule({
  declarations: [AppComponent, HabitDetailComponent, HabitListComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
