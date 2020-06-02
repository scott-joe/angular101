import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <section>
      <app-habit-list></app-habit-list>
    </section>
  `,
  styles: ['h1 { color: blue }'],
})
export class AppComponent {
  title = 'angular101';
}
