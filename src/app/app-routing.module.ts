import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  { path: '/Libros', component: LibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
