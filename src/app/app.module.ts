import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

import 'hammerjs'; //Delete??

@NgModule({
  declarations: [
    AppComponent,
    AppGroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    //MatButtonModule,
    MatToolbarModule,
    MatIconModule,
   // MatCardModule,
    //FormsModule,
   // ReactiveFormsModule,
   // MatFormFieldModule,
    //MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
