import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { SidebarModule } from './../components/sidebar/sidebar.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScullyLibModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireFunctionsModule,
    SidebarModule,
  ],
})
export class CoreModule {}
