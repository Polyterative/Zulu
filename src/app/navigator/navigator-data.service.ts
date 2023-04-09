import { Injectable } from '@angular/core';
import { HotkeysService } from '@ngneat/hotkeys';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class NavigatorDataService {

  currentEntities$ = new BehaviorSubject<NavigationEntity[]>([]);

  permanentEntities$ = new BehaviorSubject<NavigationEntity[]>([
    {
      title: 'Yes',
      glyph: '',
      hotkey: 'y'
    },
    {

      title: 'No',
      glyph: '𐄂',
      hotkey: 'n'
    },
    {
      title: 'Up',
      glyph: '↑',
      hotkey: 'up'
    },
    {
      title: 'Down',
      glyph: '↓',
      hotkey: 'down'
    },
    {
      title: 'Left',
      glyph: '←',
      hotkey: 'left'
    },
    {
      title: 'Right',
      glyph: '→',
      hotkey: 'right'
    },

  ]);

  constructor(
    private hotkeys: HotkeysService
  ) {

    this.permanentEntities$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(entities => {
        entities.forEach(entity => {
          this.hotkeys.addShortcut({ keys: entity.hotkey, description: entity.title })
            .subscribe(() => {
              console.log(entity.title + ' pressed');
            });
        });
      });
  }

}

export interface NavigationEntity {
  title: string;
  glyph: string;
  hotkey: string;
}
