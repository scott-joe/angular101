import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    // this.habits = this.habitService.getHabits();
    const result = this.habitService.getHabits().pipe(
      map((habits) => {
        return habits.map((habit) => {
          habit.streak = habit.count > 5 ? true : false;
          return habit;
        });
      })
      // map((habits) => {
      //   console.log('habits', habits);
      //   // return habits;
      //   const result = habits.map((habit) => {
      //     // console.log(habit);
      //     habit.streak = habit.count > 5 ? true : false;
      //     return habit;
      //     // return {
      //     //   ...habit,
      //     //   streak: habit.count > 5 ? true : false,
      //     // };
      //   });
      //   console.log('result', result);
      //   return result;
      // })
    );

    console.log('outer result', result);
    this.habits = result;
  }
  onAddHabit(newHabit: any) {
    this.habitService.addHabit(newHabit);
  }
}
