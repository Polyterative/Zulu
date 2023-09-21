import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  leftKeyPressed = new EventEmitter<void>();
  rightKeyPressed = new EventEmitter<void>();

  constructor() {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        this.leftKeyPressed.emit();
      } else if (event.key === 'ArrowRight') {
        this.rightKeyPressed.emit();
      }
    });
  }
}
