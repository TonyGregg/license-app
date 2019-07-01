import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LicenselistComponent } from './licenselist/licenselist.component';
import { LicenseDirective } from './license.directive';
import { LicensefilterPipe } from './licensefilter.pipe';
import { LicenseTemplateComponent } from './license-template/license-template.component';

@NgModule({
  declarations: [
    AppComponent,
    LicenselistComponent,
    LicenseDirective,
    LicensefilterPipe,
    LicenseTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
