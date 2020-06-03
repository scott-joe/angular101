import { Component, OnInit, Input } from '@angular/core';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-detail',
  template: `
    <li [style.color]="habit.streak ? 'red' : 'black'">
      {{ habit.title }} (Count: {{ habit.count }})
    </li>
  `,
  styles: [],
})
export class HabitDetailComponent {
  @Input() habit: Habit;
  constructor() {}
}
