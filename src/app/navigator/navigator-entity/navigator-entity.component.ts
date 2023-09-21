import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationEntity } from '../navigator-data.service';
import { KeyboardService } from '../keyboard.service';

interface NavigationTree {
  previous?: NavigationTree;
  next?: NavigationTree;
  // Add other properties as needed
}

@Component({
  selector: 'app-navigator-entity',
  templateUrl: './navigator-entity.component.html',
  styleUrls: ['./navigator-entity.component.css'],
})
export class NavigatorEntityComponent implements OnInit, OnDestroy {
  @Input() item!: NavigationEntity;

  navigationTree: NavigationTree | null;
  private leftKeySubscription: Subscription;
  private rightKeySubscription: Subscription;

  constructor(private keyboardService: KeyboardService) {}

  ngOnInit() {
    this.leftKeySubscription = this.keyboardService.leftKeyPressed.subscribe(
      () => {
        // Update navigation tree when left key is pressed
        if (this.navigationTree && this.navigationTree.previous) {
          this.navigationTree = this.navigationTree.previous;
        }
      },
    );

    this.rightKeySubscription = this.keyboardService.rightKeyPressed.subscribe(
      () => {
        // Update navigation tree when right key is pressed
        if (this.navigationTree && this.navigationTree.next) {
          this.navigationTree = this.navigationTree.next;
        }
      },
    );

    // Parse JSON tree to create DOM structure
    this.navigationTree = JSON.parse(this.item.jsonTree);
  }

  ngOnDestroy() {
    if (this.leftKeySubscription) {
      this.leftKeySubscription.unsubscribe();
    }
    if (this.rightKeySubscription) {
      this.rightKeySubscription.unsubscribe();
    }
  }
}
