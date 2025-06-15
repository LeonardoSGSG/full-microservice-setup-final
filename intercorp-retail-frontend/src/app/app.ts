import { Component } from '@angular/core';
import { ConsolidatedDataComponent } from './consolidated-data/consolidated-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConsolidatedDataComponent],
  template: `<app-consolidated-data />`,
})
export class AppComponent {}
