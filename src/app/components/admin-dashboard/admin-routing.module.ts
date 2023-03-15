import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { BooksComponent } from '../customer-dashboard/books/books.component';
import { DashboardComponent } from '../customer-dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
      },
      {
        path: 'books',
        component: BooksComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
