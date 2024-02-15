import { NgIf } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @HostBinding('class.dark-mode') isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkMode = this.themeService.isDarkTheme();
    this.themeService.themeChanged.subscribe((isDarkMode: boolean) => {
      this.isDarkMode = isDarkMode;
    });
  }

  counter: number = 0;

  increment() {
    this.counter++;
  }
  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
