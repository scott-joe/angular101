import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
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

  getHabits(): Observable<any> {
    return of(this.habits);
  }

  addHabit({ title }: any) {
    this.habits.push({
      id: this.habits.length + 1,
      title,
    });
  }
}
