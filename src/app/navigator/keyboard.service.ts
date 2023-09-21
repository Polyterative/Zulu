import { Injectable, EventEmitter, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService implements OnDestroy {
  leftKeyPressed = new EventEmitter<void>();
  rightKeyPressed = new EventEmitter<void>();

  private keydownEventListener:
    | ((this: Window, ev: KeyboardEvent) => any)
    | null = null;

  constructor() {
    this.keydownEventListener = (event) => {
      if (event.key === 'ArrowLeft') {
        this.leftKeyPressed.emit();
      } else if (event.key === 'ArrowRight') {
        this.rightKeyPressed.emit();
      }
    };
    window.addEventListener('keydown', this.keydownEventListener);
  }

  ngOnDestroy(): void {
    if (this.keydownEventListener) {
      window.removeEventListener('keydown', this.keydownEventListener);
    }
  }
}
