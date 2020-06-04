import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitSettingsComponent } from './habit-settings/habit-settings.component';
import { HabitFormComponent } from './habit-form/habit-form.component';

const routes: Routes = [
  { path: 'list', component: HabitListComponent },
  { path: 'settings', component: HabitSettingsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HabitDetailComponent,
    HabitListComponent,
    HabitFormComponent,
    HabitSettingsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HabitFormComponent],
})
export class AppModule {}
