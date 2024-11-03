import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { GetCategoryComponent } from './components/get-category/get-category.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { EventsComponent } from './events/events.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

const routes: Routes = [

  { path: 'category' ,component: PostCategoryComponent },
  { path: "" ,component: GetCategoryComponent },
  { path: "category/:id" ,component: UpdateCategoryComponent },
  { path: 'event' ,component: EventsComponent },
  { path: 'event' ,component: ConfirmDialogComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
