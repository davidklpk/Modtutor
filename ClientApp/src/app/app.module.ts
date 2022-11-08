import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './shared/material.module';
import { ContainerComponent } from './components/container/container.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './pages/start/start.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { StudentlistComponent } from './pages/studentlist/studentlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContainerComponent,
    StartComponent,
    SidenavComponent,
    ClassesComponent,
    StudentlistComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    /*RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),*/
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
