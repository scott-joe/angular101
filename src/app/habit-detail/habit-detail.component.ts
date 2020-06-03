import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-habit-detail',
  template: ` <p>{{ habit.title }} (Count: {{ habit.count }})</p> `,
    <p>
      {{ habit.title }}
    </p>
  `,
  styles: [],
})
export class HabitDetailComponent {
  @Input() habit: any;
  constructor() {}
}
