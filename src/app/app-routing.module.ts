import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // Import your dashboard component

const routes: Routes = [
  // Other routes go here
  { path: 'dashboard', component: DashboardComponent }, // Define the dashboard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
