import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isToggle = true;

  onClick() {
    this.isToggle = !this.isToggle;
  }
}
