import { Component, Input } from '@angular/core';
import { NavigationEntity } from '../navigator-data.service';

@Component({
  selector: 'app-navigator-entity',
  templateUrl: './navigator-entity.component.html',
  styleUrls: ['./navigator-entity.component.css']
})
export class NavigatorEntityComponent {

  @Input() item!: NavigationEntity;

}
