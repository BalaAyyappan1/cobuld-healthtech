import { Component } from '@angular/core';
import { AboutHero } from './sections/hero/hero';
import { AboutCommitment } from './sections/commitment/commitment';
import { AboutMessage } from './sections/message/message';
import { AboutPrecision } from './sections/precision/precision';

@Component({
  selector: 'app-about',
  imports: [AboutHero, AboutCommitment, AboutMessage, AboutPrecision],
  templateUrl: './about.html',
})
export class About {}
