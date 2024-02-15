import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}

  toggleDarkMode(): void {
    // Call the toggleDarkMode method from the ThemeService
    this.themeService.toggleDarkMode();
  }
}
