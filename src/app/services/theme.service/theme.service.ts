import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode: boolean = false;
  themeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeChanged.emit(this.isDarkMode);
  }

  // Public method to check if dark mode is enabled
  isDarkTheme(): boolean {
    return this.isDarkMode;
  }
}
