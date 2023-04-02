import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './module/form/form.component';
import { MyHooksComponent } from './module/my-hooks/my-hooks.component';
import { HomeComponent } from './module/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'hooks',
    component: MyHooksComponent,
  },
  {
    path: '**',
    component: MyHooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
