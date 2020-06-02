import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>List</h2>
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add Habit" formControlName="title" />
      <button type="submit">Add</button>
    </form>
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
  habitForm: any;
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

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title: '',
    });
  }

  onSubmit(newHabit: any) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
    this.habitForm.reset();
  }

  ngOnInit(): void {}
}
