import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {
    path: "user-view/:id",
    component:UserViewComponent
  },
  {
    path:"edit-form/:id",
    component:EditFormComponent
  },
  {
    path:"add-form",
    component:AddFormComponent
  },
  {
    path:"user-table",
    component:UserTableComponent
  },
  {
    path:"",
    component:UserTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
