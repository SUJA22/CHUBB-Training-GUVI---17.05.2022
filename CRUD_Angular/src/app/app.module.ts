import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataService } from './user-data.service';
import { UserTableComponent } from './user-table/user-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AddFormComponent } from './add-form/add-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    NavbarComponent,
    UserViewComponent,
    AddFormComponent,
    EditFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
