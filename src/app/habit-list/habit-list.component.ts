import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  habits = [
    {
      id: 1,
      title: 'Check in with the parents this week',
    },
    {
      id: 2,
      title: 'Check in with the parents this month',
    },
    {
      id: 3,
      title: 'Check in with the parents this year',
    },
    {
      id: 4,
      title: 'Check in with the parents this decade',
    },
    {
      id: 5,
      title: 'Check in with the parents this century',
    },
  ];

  constructor() {}

  onAddHabit({ title }: any) {
    this.habits.push({
      id: this.habits.length + 1,
      title,
    });
  }

  ngOnInit(): void {}
}
