import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubCategoryAddPage } from './sub-category-add';

@NgModule({
  declarations: [
    SubCategoryAddPage,
  ],
  imports: [
    IonicPageModule.forChild(SubCategoryAddPage),
  ],
})
export class SubCategoryAddPageModule {}
