import { Component, Input, OnInit } from '@angular/core';
import { NavigationEntity } from '../navigator-data.service';
import { KeyboardService } from '../keyboard.service';

@Component({
  selector: 'app-navigator-entity',
  templateUrl: './navigator-entity.component.html',
  styleUrls: ['./navigator-entity.component.css'],
})
export class NavigatorEntityComponent implements OnInit {
  @Input() item!: NavigationEntity;
  navigationTree: any;

  constructor(private keyboardService: KeyboardService) {}

  ngOnInit() {
    this.keyboardService.leftKeyPressed.subscribe(() => {
      // Update navigation tree when left key is pressed
      if (this.navigationTree && this.navigationTree.previous) {
        this.navigationTree = this.navigationTree.previous;
      }
    });

    this.keyboardService.rightKeyPressed.subscribe(() => {
      // Update navigation tree when right key is pressed
      if (this.navigationTree && this.navigationTree.next) {
        this.navigationTree = this.navigationTree.next;
      }
    });

    // Parse JSON tree to create DOM structure
    this.navigationTree = JSON.parse(this.item.jsonTree);
  }
}
