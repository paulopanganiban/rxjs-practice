import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonListComponent } from './json-list/json-list.component';
import { JsonDetailsComponent } from './json-details/json-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';



import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    JsonListComponent,
    JsonDetailsComponent,
    HeroesComponent,
    HeroDetailComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
