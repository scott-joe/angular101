import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <a routerLink="/list">List</a>
    <a routerLink="/settings">Settings</a>
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  styles: ['h1 { color: blue }', 'a { padding: 10px }'],
})
export class AppComponent {
  title = 'angular101';
}
