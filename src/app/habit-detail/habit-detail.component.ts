import { Component, OnInit, Input } from '@angular/core';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-detail',
  template: ` <p>{{ habit.title }} (Count: {{ habit.count }})</p> `,
  styles: [],
})
export class HabitDetailComponent {
  @Input() habit: Habit;
  constructor() {}
}
