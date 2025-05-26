import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  Event,
  NavigationStart,
} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgClass, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public isRotate = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isRotate = false;
      }
    });
  }

  toggleRotate() {
    this.isRotate = !this.isRotate;
  }

  toggleTheme() {
    const ele = document.querySelector('.theme-toggle');
    const body = document.querySelector('body');
    ele?.classList.toggle('theme-toggle--toggled');
    body?.classList.toggle('dark-theme');
  }
}
