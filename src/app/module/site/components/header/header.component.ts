import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false; // Controla a abertura do menu

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
