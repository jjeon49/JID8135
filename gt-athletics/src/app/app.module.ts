import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PolicyComponent } from './policy/policy.component';
import { SearchComponent } from './search/search.component';
import { QuillModule } from 'ngx-quill';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
