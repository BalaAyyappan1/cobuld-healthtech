import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { logo } from '../../../../../assets';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class Navbar {
  logo = logo;
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }
}
