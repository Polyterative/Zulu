import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatorEntityComponent } from './navigator/navigator-entity/navigator-entity.component';
import { NavigatorPanelComponent } from './navigator/navigator-panel/navigator-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorPanelComponent,
    NavigatorEntityComponent,

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
