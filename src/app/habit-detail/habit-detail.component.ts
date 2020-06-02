import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-habit-detail',
  template: `
    <p>
      {{ habit.title }}
    </p>
  `,
  styles: [],
})
export class HabitDetailComponent implements OnInit {
  @Input() habit: any;

  constructor() {}
  ngOnInit(): void {}
}
