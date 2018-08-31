import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TownInvestigativeRoleSelectorComponent } from './ti-role-selector.component';
import { TownProtectiveRoleSelectorComponent } from './tp-role-selector.component';
import { TownKillingRoleSelectorComponent } from './tk-role-selector.component';
import { TownSupportRoleSelectorComponent } from './ts-role-selector.component';
import { RandomTownRoleSelectorComponent } from './rt-role-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    TownInvestigativeRoleSelectorComponent,
    TownProtectiveRoleSelectorComponent,
    TownKillingRoleSelectorComponent,
    TownSupportRoleSelectorComponent,
    RandomTownRoleSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
