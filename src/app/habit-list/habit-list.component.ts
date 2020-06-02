import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>List</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-detail
        *ngFor="let habit of habits"
        [habit]="habit"
      ></app-habit-detail>
    </ul>
  `,
  styles: [],
})
export class HabitListComponent implements OnInit {
  habits: Observable<any>;
  constructor(private habitService: HabitService) {}
  ngOnInit(): void {
    this.habitService.getHabits().subscribe((habits) => {
      this.habits = habits;
    });
  }
  onAddHabit(newHabit: any) {
    this.habitService.addHabit(newHabit);
  }
}
