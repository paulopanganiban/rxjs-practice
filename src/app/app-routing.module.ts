import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonDetailsComponent } from './json-details/json-details.component';
import { JsonListComponent } from './json-list/json-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: JsonListComponent },
  { path: 'json-details/:id', component: JsonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
