import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits: Habit[] = [
    {
      id: 1,
      title: 'Check in with the parents this week',
      count: 1,
    },
    {
      id: 2,
      title: 'Check in with the parents this month',
      count: 6,
    },
    {
      id: 3,
      title: 'Check in with the parents this year',
      count: 3,
    },
    {
      id: 4,
      title: 'Check in with the parents this decade',
      count: 10,
    },
    {
      id: 5,
      title: 'Check in with the parents this century',
      count: 65,
    },
  ];

  constructor() {}

  getHabits(): Observable<Habit[]> {
    return of(this.habits);
  }

  addHabit({ title }: any) {
    this.habits.push({
      id: this.habits.length + 1,
      title,
      count: Math.round(Math.random() * 100),
    });
  }
}
