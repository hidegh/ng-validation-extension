import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SecondComponent } from './second.component';

const routes: Routes = [
    {
    path: '',
    children: [
      { path: '', component: AppComponent, pathMatch: 'full' },
      { path: 'second', component: SecondComponent, pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
