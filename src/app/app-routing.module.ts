import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearBootComponent } from './crear-boot/crear-boot.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'crear-bot', component: CrearBootComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
