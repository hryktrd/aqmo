import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MeasWater } from '../pages/MeasWater/MeasWater';
import {ChangeWater} from "../pages/ChangeWater/ChangeWater";

@NgModule({
  declarations: [
    MyApp,
    ChangeWater,
    MeasWater,
    ChangeWater,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChangeWater,
    MeasWater
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
