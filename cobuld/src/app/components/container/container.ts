import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `<div class="md:px-20 px-5"><ng-content /></div>`,
})
export class Container {}
