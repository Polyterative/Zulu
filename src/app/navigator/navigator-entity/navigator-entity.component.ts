import { Component, Input, OnInit } from '@angular/core';
import { NavigationEntity } from '../navigator-data.service';
import { KeyboardService } from '../keyboard.service';

@Component({
  selector: 'app-navigator-entity',
  templateUrl: './navigator-entity.component.html',
  styleUrls: ['./navigator-entity.component.css'],
})
export class NavigatorEntityComponent implements OnInit {
  @Input() item!: any;

  constructor(private keyboardService: KeyboardService) {}

  ngOnInit() {
    this.keyboardService.getKeyboardEvent().subscribe((event) => {
      // Update navigation according to the keyboard event
      // This is a placeholder, replace with actual navigation update logic
      console.log('Keyboard event:', event);
    });
  }
}
