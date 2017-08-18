import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import { HttpModule } from '@angular/http';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {MeasWater} from '../pages/MeasWater/MeasWater';
import {ChangeWater} from "../pages/ChangeWater/ChangeWater";
@NgModule({
    declarations: [
        MyApp,
        ChangeWater,
        MeasWater,
        ChangeWater,
    ],
    imports: [
        BrowserModule,
        HttpModule,
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
export class AppModule {
}
