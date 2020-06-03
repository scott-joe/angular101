import { Component, OnInit, Input } from '@angular/core';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-detail',
  template: `
    <li>
      {{ habit.title }} (Count: {{ habit.count }})<button type="button">
        Delete
      </button>
    </li>
  `,
  styles: [],
})
export class HabitDetailComponent {
  @Input() habit: Habit;
  constructor() {}
}
