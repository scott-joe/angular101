import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HabitService } from '../habit.service';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>List</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-detail
        *ngFor="let habit of habits | async"
        [habit]="habit"
      ></app-habit-detail>
    </ul>
  `,
  styles: [],
})
export class HabitListComponent implements OnInit {
  habits: Observable<Habit[]>;
  constructor(private habitService: HabitService) {}
  ngOnInit(): void {
    this.habits = this.habitService.getHabits();
  }
  onAddHabit(newHabit: Habit) {
    this.habitService.addHabit(newHabit);
  }
}
