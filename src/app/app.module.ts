import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/customer-dashboard/login/login.component';
import { SignupComponent } from './components/customer-dashboard/signup/signup.component';
import { DashboardComponent } from './components/customer-dashboard/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './components/customer-dashboard/books/books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from 'src/app/components/admin-dashboard/admin-routing.module';
import { ProfileComponent } from './components/admin-dashboard/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { LibraryComponent } from './components/library/library.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddBookComponent } from './components/admin-dashboard/add-book/add-book.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    BooksComponent,
    AdminDashboardComponent,
    ProfileComponent,
    HeaderComponent,
    LibraryComponent,
    AddBookComponent,
    CustomerDashboardComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AdminRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  constructors() {}
  ngOnInit(): void {}
}
