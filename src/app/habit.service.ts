import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Habit } from './habit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  private refetchSubject = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  get refetch() {
    return this.refetchSubject.asObservable();
  }

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>('/api/habits').pipe(
      map((habits) => {
        return habits.map((habit) => {
          habit.streak = habit.count > 5 ? true : false;
          return habit;
        });
      })
    );
  }

  addHabit(newHabit) {
    return this.http
      .post<Habit>('/api/habits', newHabit)
      .pipe(tap(() => this.refetchSubject.next(null)));
  }
}
