import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbNavButtonDirectiveModule } from '@linch90/ngb-nav-button-directive';
import { NgbNavModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbNavModule, NgbDropdownModule, NgbNavButtonDirectiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
