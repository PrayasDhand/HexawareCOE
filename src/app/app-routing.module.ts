import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/customer-dashboard/login/login.component';
import { SignupComponent } from './components/customer-dashboard/signup/signup.component';
import { DashboardComponent } from './components/customer-dashboard/dashboard/dashboard.component';
import { BooksComponent } from './components/customer-dashboard/books/books.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LibraryComponent } from './components/library/library.component';
import { AddBookComponent } from './components/admin-dashboard/add-book/add-book.component';
import { ProfileComponent } from './components/admin-dashboard/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'signup', component: SignupComponent },
  { path: 'books', component: BooksComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'library', component: LibraryComponent },
  {path:'add-book',component:AddBookComponent},
  {path:'profile',component:ProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
