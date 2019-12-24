import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SwitchMapComponent],
  bootstrap:    [ SwitchMapComponent ]
})
export class AppModule { }
