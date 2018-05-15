import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { SliderModule } from "primeng/slider";
import { TabViewModule } from 'primeng/tabview';
import { AppComponent } from './app.component';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ContentsComponent } from "./contents/contents.component";

import { AppRoutingModule } from "./app-routing.module";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SliderModule,
        TabViewModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ContentsComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}
