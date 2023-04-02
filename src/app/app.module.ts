import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './module/form/form.component';
import { NavbarComponent } from './module/navbar/navbar.component';
import { MyHooksComponent } from './module/my-hooks/my-hooks.component';
import { ChildComponent } from './module/my-hooks/child/child.component';
import { ParentComponent } from './module/my-hooks/parent/parent.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './module/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    MyHooksComponent,
    ChildComponent,
    ParentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
