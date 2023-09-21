import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  // Define a subject for keyboard events
  private keyEvent = new Subject<string>();

  // Expose the subject as an observable
  keyEvent$ = this.keyEvent.asObservable();

  constructor() {
    // Listen for keyboard events
    window.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        // Emit an event when the left or right arrow keys are pressed
        this.keyEvent.next(event.key);
      }
    });
  }
}
