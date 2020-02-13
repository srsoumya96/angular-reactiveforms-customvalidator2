import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule  ],
  declarations: [ AppComponent, SignUpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
