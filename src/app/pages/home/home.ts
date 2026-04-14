import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { HomeAbout } from './sections/about/about';
import { Commitment } from './sections/commitment/commitment';
import { DonationCamps } from './sections/donation-camps/donation-camps';

@Component({
  selector: 'app-home',
  imports: [Hero, HomeAbout, Commitment, DonationCamps],
  templateUrl: './home.html',
})
export class Home {}
