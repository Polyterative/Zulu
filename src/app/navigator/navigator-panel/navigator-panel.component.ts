import { Component } from '@angular/core';
import { NavigatorDataService } from '../navigator-data.service';

@Component({
  selector: 'app-navigator-panel',
  templateUrl: './navigator-panel.component.html',
  styleUrls: ['./navigator-panel.component.css']
})
export class NavigatorPanelComponent {
  constructor(
    public dataService: NavigatorDataService
  ) { }
}
